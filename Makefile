.PHONY: all clean

all: main
	cat test.map | grep case

main: main.c
	gcc -o main -Wl,-map,test.map -Os -std=gnu99 main.c

clean:
	rm main
