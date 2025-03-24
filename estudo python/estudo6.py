def multiplicador(numero):
    global a 
    a=2
    print(f"Dentro da função a váriavel vale: {a}")
    return a * numero
a=3
b=multiplicador(5)
print(f"A váriavel B vale: {b}")
print(f"A váriavel A agora vale: {a}")