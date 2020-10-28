call git add . 
echo "======================"
call git commit -m "deploy"
echo "======================"
call git push origin main
echo "======================"
echo "====== Done =========="
echo "======================"
pause