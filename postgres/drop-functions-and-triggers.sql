drop trigger if exists on_auth_user_created on auth.users;
drop function public.handle_new_user() cascade;
