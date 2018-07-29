# MySql database
create database template;
create table users(
	id int(11) not null auto_increment primary key,
	email varchar(256) not null,
	password varchar(256) not null
);