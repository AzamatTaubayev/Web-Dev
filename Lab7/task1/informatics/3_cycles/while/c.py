'''
Задача №3059. Список степеней двойки
По данному числу N распечатайте все целые степени двойки, не превосходящие N, в порядке возрастания.
'''
x, i = int(input()), 1
while i <= x:
    print(i, end=' ')
    i *= 2