SELECT * FROM mysql.user;
create user '用户名'@'localhost' identified by '密码';
flush privileges;

grant all on table project. questions to '学生用户名'@'localhost';
grant all on project. questions to '教师用户名'@'localhost';
grant select ('student_id','student_name','class') on table project.students to '教师用户名'@'localhost';

