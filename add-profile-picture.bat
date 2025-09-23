@echo off
echo ========================================
echo   Portfolio Profile Picture Setup
echo ========================================
echo.
echo Current directory: %CD%
echo Public folder: %CD%\public
echo.
echo To add your profile picture:
echo 1. Copy your image file to: %CD%\public\
echo 2. Rename it to: profile-pic.jpg
echo 3. Refresh your browser at http://localhost:3000
echo.
echo Supported formats: JPG, PNG, WebP
echo Recommended size: 400x400 pixels or larger
echo.
echo Press any key to open the public folder...
pause >nul
explorer "%CD%\public"
