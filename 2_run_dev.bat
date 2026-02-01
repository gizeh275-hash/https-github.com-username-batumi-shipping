@echo off
echo ================================================
echo   Запуск сайта Georgia Moving
echo ================================================
echo.

cd /d "%~dp0"

echo Запускаю dev сервер...
echo.
echo После запуска откройте в браузере:
echo http://localhost:3000
echo.
echo Для остановки нажмите Ctrl+C
echo.
echo ================================================
echo.

call npm run dev

pause
