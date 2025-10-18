@echo off
setlocal enabledelayedexpansion

set BRANCH=%1
if "%BRANCH%"=="" set BRANCH=main
set MSG=%2
if "%MSG%"=="" set MSG=chore: quick deploy

git status
echo.
pause

git add -A
git commit -m "%MSG%"
if errorlevel 1 echo No changes to commit.

echo.
git pull --rebase origin %BRANCH%
git push origin %BRANCH%

echo.
echo Done. If Cloudflare Pages is manual, trigger deploy in the dashboard.
pause
