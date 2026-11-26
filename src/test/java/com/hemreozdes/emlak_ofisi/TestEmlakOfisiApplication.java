package com.hemreozdes.emlak_ofisi;

import org.springframework.boot.SpringApplication;

public class TestEmlakOfisiApplication {

	public static void main(String[] args) {
		SpringApplication.from(EmlakOfisiApplication::main).with(TestcontainersConfiguration.class).run(args);
	}

}
