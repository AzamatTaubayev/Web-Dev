'''
Задача №334. Остаток
Выведите все числа на отрезке от a до b, дающие остаток c при 
делении на d. Если таких чисел не существует, то ничего выводить не нужно.
'''
a, b, c, d = int(input()), int(input()), int(input()), int(input())
for i in range(a, b + 1):
    if(i % d == c):
        print(i, end=' ')

