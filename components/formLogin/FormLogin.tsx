import Link from 'next/link';

export default function FormLogin() {
  return (
    <form>
      <h3>Login</h3>
      <input type="text" />
      <input type="text" />
      <Link href="/login/ChangePassword">Change password</Link>
    </form>
  );
}
