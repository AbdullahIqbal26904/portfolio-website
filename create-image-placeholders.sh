#!/bin/bash

# Image Setup Helper Script
# This script creates placeholder text files to remind you to add images

echo "📸 Creating image placeholder reminders..."

# Create projects directory
mkdir -p public/projects

# Create reminder files for main images
cat > public/profile.jpg.txt << 'EOF'
📸 REPLACE THIS WITH YOUR PROFILE IMAGE

Required: profile.jpg
Recommended size: 512x512px
Format: JPG or PNG

Your professional headshot or profile picture.

Temporary placeholder you can use:
https://via.placeholder.com/512x512
https://i.pravatar.cc/512

Delete this .txt file after adding your image.
EOF

cat > public/about-image.jpg.txt << 'EOF'
📸 REPLACE THIS WITH YOUR ABOUT SECTION IMAGE

Required: about-image.jpg
Recommended size: 800x600px
Format: JPG or PNG

An image that represents you or your workspace.

Temporary placeholder:
https://via.placeholder.com/800x600
https://picsum.photos/800/600

Delete this .txt file after adding your image.
EOF

cat > public/og-image.jpg.txt << 'EOF'
📸 REPLACE THIS WITH YOUR SOCIAL MEDIA PREVIEW IMAGE

Required: og-image.jpg
Required size: 1200x630px (exact)
Format: JPG or PNG

This image appears when sharing your site on social media.

Temporary placeholder:
https://via.placeholder.com/1200x630

Delete this .txt file after adding your image.
EOF

cat > public/resume.pdf.txt << 'EOF'
📄 REPLACE THIS WITH YOUR RESUME

Required: resume.pdf
Format: PDF

Your professional resume/CV.

Delete this .txt file after adding your resume.
EOF

# Create project image reminders
for i in {1..6}; do
  cat > "public/projects/project${i}-thumb.jpg.txt" << 'EOF'
📸 ADD YOUR PROJECT THUMBNAIL

Recommended size: 400x300px
Format: JPG or PNG

Replace this with your project screenshot/thumbnail.
Delete this .txt file after adding the image.
EOF

  cat > "public/projects/project${i}-1.jpg.txt" << 'EOF'
📸 ADD YOUR PROJECT IMAGE

Recommended size: 1200x800px
Format: JPG or PNG

Additional project screenshot.
Delete this .txt file after adding the image.
EOF
done

echo "✅ Placeholder reminders created!"
echo ""
echo "📁 Files created:"
echo "  - public/profile.jpg.txt"
echo "  - public/about-image.jpg.txt"
echo "  - public/og-image.jpg.txt"
echo "  - public/resume.pdf.txt"
echo "  - public/projects/ (project image reminders)"
echo ""
echo "📝 Next steps:"
echo "  1. Replace .txt files with actual images"
echo "  2. Delete the .txt files after adding images"
echo "  3. Update image paths in src/data/projects.js if needed"
echo ""
