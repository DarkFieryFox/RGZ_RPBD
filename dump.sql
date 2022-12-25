create sequence schoolchild_id_seq
	as integer;

alter sequence schoolchild_id_seq owner to kristinasikovskaya;

create table if not exists parents
(
	id serial
		constraint parents_pkey
			primary key,
	name text,
	surname text,
	patronymic text,
	degree text,
	address text
);

alter table parents owner to kristinasikovskaya;

create table if not exists progress
(
	id serial
		constraint progress_pkey
			primary key,
	classs text,
	year integer,
	subject name,
	quarter integer,
	half_yearly integer,
	yearly integer,
	exam integer,
	finaly integer
);

alter table progress owner to kristinasikovskaya;

create table if not exists schoolchilds
(
	id integer default nextval('schoolchild_id_seq'::regclass) not null
		constraint schoolchild_pkey
			primary key,
	name text,
	surname text,
	patronymic text,
	address text,
	birthday date,
	year_admission integer
);

alter table schoolchilds owner to kristinasikovskaya;

alter sequence schoolchild_id_seq owned by schoolchilds.id;

create table if not exists schoolchild_parents
(
	schoolchild_id integer
		constraint schoolchild_parents_schoolchild_id_fkey
			references schoolchilds,
	parent_id integer
		constraint schoolchild_parents_parent_id_fkey
			references parents
);

alter table schoolchild_parents owner to kristinasikovskaya;

create table if not exists schoolchild_progress
(
	schoolchild_id integer
		constraint schoolchild_progress_schoolchild_id_fkey
			references schoolchilds,
	progress_id integer
		constraint schoolchild_progress_progress_id_fkey
			references progress
);

alter table schoolchild_progress owner to kristinasikovskaya;

