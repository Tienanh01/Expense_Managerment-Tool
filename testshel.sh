#!/bin/bash

# Nh?p m?t s? nguy?n t? ng??i d?ng
echo "Nh?p m?t s? nguy?n: "
read num

# Ki?m tra xem s? nguy?n l? s? ch?n hay s? l?
if [ $((num % 2)) -eq 0 ]; then
    echo "S? $num l? s? ch?n."
else
    echo "S? $num l? s? l?."
fi

