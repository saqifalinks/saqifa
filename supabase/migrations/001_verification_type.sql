-- تغییر is_verified (boolean) به verification_type (text)
-- مقادیر: null = بدون تیک, 'blue' = تیک آبی, 'gold' = تیک طلایی

alter table entities add column verification_type text default null;
update entities set verification_type = 'blue' where is_verified = true;
alter table entities drop column is_verified;
