import Link from 'next/link';

export default function FormLogin() {
  return (
    <div>
      <div className="border max-w-xl h-80 bg-black">
        <div>
          <h3 className="text-white">¡Hello!</h3>
          <p className="text-white">
            Login with the data you entered during your registration.
          </p>
        </div>
        <form>
          <label>
            <span className="font-semibold text-white">Email</span>
            <input type="text" />
          </label>
          <label>
            <span className="font-semibold text-white">Password</span>
            <input type="password" />
          </label>
          <p className="text-gray-300">
            Did you forget your password?
            <Link href="/login/change-password" className="text-white">
              recover it here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
