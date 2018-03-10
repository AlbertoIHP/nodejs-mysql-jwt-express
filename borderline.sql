# MySql database
create database borderline;

create table role(
	id int not null auto_increment primary key,
	name int not null
);
create table user(
	id int not null auto_increment primary key,
	nickname varchar(30) not null,
	name varchar(30) not null,
	lastname varchar(30) not null,
	phone varchar(20) not null,
	email varchar(50) not null,
	password varchar(30) not null,
	xp int not null default 0,
	active boolean not null default false,
	role_id int not null,
	created_at timestamp not null default current_timestamp,
	updated_at timestamp not null default current_timestamp on update current_timestamp,
	foreign key (role_id) references role(id)
);
create table bank(
	id int not null auto_increment primary key,
	name varchar(40) not null
);
create table template(
	id int not null auto_increment primary key,
	user_id int not null,
	name varchar(30) not null,
	bank_id int not null,
	price_formula varchar(255) not null,
	active boolean not null default false,
	temrs blob not null,
	created_at timestamp not null default current_timestamp,
	updated_at timestamp not null default current_timestamp on update current_timestamp,
	foreign key (bank_id) references bank(id),
	foreign key (user_id) references user(id)
);
create table operation(
	id int not null auto_increment primary key,
	operation_code varchar(255) not null unique,
	operation_terms blob not null,
	bank_id int not null,
	template_formula varchar(255) not null,
	active boolean not null default true,
	type int not null,
	creator_op int not null,
	user_op int not null
	created_at timestamp not null default current_timestamp,
	updated_at timestamp not null default current_timestamp on update current_timestamp,
	foreign key (bank_id) references bank(id),
	foreign key (creator_op) references user(id),
	foreign key (user_op) references user(id),
	foreign key (template_formula) references template(price_formula)

);