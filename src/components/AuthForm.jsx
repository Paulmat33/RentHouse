function AuthForm({ type, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {type === "signup" && (
        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-4 py-2 border rounded"
          required
        />
      )}

      <input
        type="email"
        placeholder="Email"
        className="w-full px-4 py-2 border rounded"
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full px-4 py-2 border rounded"
        required
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        {type === "signup" ? "Sign Up" : "Login"}
      </button>
    </form>
  );
}

export default AuthForm;
