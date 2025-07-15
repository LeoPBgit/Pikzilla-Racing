#!/bin/bash

# Pikzilla Racing Project Backup Script
# This script creates comprehensive backups of the project

# Configuration
PROJECT_NAME="Pikzilla-Racing"
BACKUP_DIR="$HOME/Backups/Pikzilla-Racing"
DATE=$(date +"%Y%m%d_%H%M%S")
BACKUP_NAME="${PROJECT_NAME}_backup_${DATE}"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Create backup directory if it doesn't exist
create_backup_dir() {
    if [ ! -d "$BACKUP_DIR" ]; then
        mkdir -p "$BACKUP_DIR"
        print_status "Created backup directory: $BACKUP_DIR"
    fi
}

# Git repository backup
backup_git_repo() {
    print_status "Creating Git repository backup..."
    
    # Create a bare clone of the repository
    git clone --bare . "$BACKUP_DIR/${BACKUP_NAME}_git_repo.git"
    
    if [ $? -eq 0 ]; then
        print_status "Git repository backup completed successfully"
    else
        print_error "Git repository backup failed"
        return 1
    fi
}

# Full project files backup
backup_project_files() {
    print_status "Creating full project files backup..."
    
    # Create tar.gz archive of the entire project
    tar -czf "$BACKUP_DIR/${BACKUP_NAME}_files.tar.gz" \
        --exclude='.git' \
        --exclude='node_modules' \
        --exclude='.DS_Store' \
        --exclude='*.log' \
        .
    
    if [ $? -eq 0 ]; then
        print_status "Project files backup completed successfully"
    else
        print_error "Project files backup failed"
        return 1
    fi
}

# Database/Content backup (for future use)
backup_content() {
    print_status "Creating content backup..."
    
    # Create a structured backup of important content
    mkdir -p "$BACKUP_DIR/${BACKUP_NAME}_content"
    
    # Copy documentation
    if [ -d "docs" ]; then
        cp -r docs "$BACKUP_DIR/${BACKUP_NAME}_content/"
        print_status "Documentation backed up"
    fi
    
    # Copy assets
    if [ -d "assets" ]; then
        cp -r assets "$BACKUP_DIR/${BACKUP_NAME}_content/"
        print_status "Assets backed up"
    fi
    
    # Copy configuration files
    for file in *.md *.json *.yml *.yaml .gitignore; do
        if [ -f "$file" ]; then
            cp "$file" "$BACKUP_DIR/${BACKUP_NAME}_content/"
        fi
    done
    
    print_status "Content backup completed"
}

# Create backup manifest
create_manifest() {
    print_status "Creating backup manifest..."
    
    MANIFEST_FILE="$BACKUP_DIR/${BACKUP_NAME}_manifest.txt"
    
    cat > "$MANIFEST_FILE" << EOF
Pikzilla Racing Project Backup Manifest
======================================

Backup Date: $(date)
Backup Name: $BACKUP_NAME
Git Commit: $(git rev-parse HEAD)
Git Branch: $(git branch --show-current)

Files Included:
- Git repository (bare clone): ${BACKUP_NAME}_git_repo.git
- Project files archive: ${BACKUP_NAME}_files.tar.gz
- Content backup: ${BACKUP_NAME}_content/

Project Statistics:
- Total files: $(find . -type f | wc -l)
- HTML files: $(find . -name "*.html" | wc -l)
- CSS files: $(find . -name "*.css" | wc -l)
- JS files: $(find . -name "*.js" | wc -l)
- Image files: $(find . -name "*.jpg" -o -name "*.png" -o -name "*.svg" | wc -l)

Git Status:
$(git status --porcelain)

Recent Commits:
$(git log --oneline -10)

Backup Size:
$(du -sh "$BACKUP_DIR/${BACKUP_NAME}"* | tail -5)
EOF

    print_status "Backup manifest created: $MANIFEST_FILE"
}

# Cleanup old backups (keep last 10)
cleanup_old_backups() {
    print_status "Cleaning up old backups..."
    
    # Count backup files
    BACKUP_COUNT=$(ls -1 "$BACKUP_DIR" | grep "${PROJECT_NAME}_backup_" | wc -l)
    
    if [ "$BACKUP_COUNT" -gt 10 ]; then
        print_warning "Found $BACKUP_COUNT backups, keeping only the 10 most recent"
        
        # Remove old backups (keep newest 10)
        ls -1t "$BACKUP_DIR" | grep "${PROJECT_NAME}_backup_" | tail -n +31 | while read file; do
            rm -rf "$BACKUP_DIR/$file"
            print_status "Removed old backup: $file"
        done
    fi
}

# Verify backup integrity
verify_backup() {
    print_status "Verifying backup integrity..."
    
    # Check if backup files exist and are not empty
    if [ -f "$BACKUP_DIR/${BACKUP_NAME}_files.tar.gz" ] && [ -s "$BACKUP_DIR/${BACKUP_NAME}_files.tar.gz" ]; then
        print_status "Files backup verified"
    else
        print_error "Files backup verification failed"
        return 1
    fi
    
    if [ -d "$BACKUP_DIR/${BACKUP_NAME}_git_repo.git" ]; then
        print_status "Git backup verified"
    else
        print_error "Git backup verification failed"
        return 1
    fi
    
    if [ -d "$BACKUP_DIR/${BACKUP_NAME}_content" ]; then
        print_status "Content backup verified"
    else
        print_error "Content backup verification failed"
        return 1
    fi
    
    print_status "All backups verified successfully"
}

# Main backup function
main() {
    print_status "Starting Pikzilla Racing project backup..."
    print_status "Backup will be saved to: $BACKUP_DIR"
    
    # Check if we're in a git repository
    if [ ! -d ".git" ]; then
        print_error "Not in a git repository. Please run this script from the project root."
        exit 1
    fi
    
    # Create backup directory
    create_backup_dir
    
    # Perform backups
    backup_git_repo || exit 1
    backup_project_files || exit 1
    backup_content || exit 1
    
    # Create manifest
    create_manifest
    
    # Verify backup
    verify_backup || exit 1
    
    # Cleanup old backups
    cleanup_old_backups
    
    print_status "Backup completed successfully!"
    print_status "Backup location: $BACKUP_DIR"
    print_status "Backup name: $BACKUP_NAME"
    
    # Display backup size
    BACKUP_SIZE=$(du -sh "$BACKUP_DIR/${BACKUP_NAME}"* | awk '{total+=$1} END {print total}')
    print_status "Total backup size: $(du -sh "$BACKUP_DIR" | awk '{print $1}')"
}

# Run the backup
main "$@"
