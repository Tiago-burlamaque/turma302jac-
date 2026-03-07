CREATE SCHEMA `jaco302` ;

CREATE TABLE `jaco302`.`aluno` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(225) NULL,
  `matricula` BIGINT NULL,
  `senha` VARCHAR(225) NULL,
  `ativo` INT NULL DEFAULT 1,
  PRIMARY KEY (`id`));
