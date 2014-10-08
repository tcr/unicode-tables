#include <stdio.h>
#include <stdint.h>
#include <stdlib.h>

static uint32_t uppercase_delta (uint32_t point) {
	switch (point) {
		#include "upper.h"
		default: return 0;
	}
}

uint32_t uppercase (uint32_t point) {
	return point - uppercase_delta(point);
}

static uint32_t lowercase_delta (uint32_t point) {
	switch (point) {
		#include "lower.h"
		default: return 0;
	}
}

uint32_t lowercase (uint32_t point) {
	return point - lowercase_delta(point);
}

int main (int argc, char *argv[]) {
	if (argc < 2) {
		printf("Usage: main number\n");
		return 1;
	}

	uint32_t point = atoi(argv[1]);
	printf("upper: %d\n", uppercase(point));
	printf("lower: %d\n", lowercase(point));
	return 0;
}