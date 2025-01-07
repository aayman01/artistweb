import From from "@/components/shared/From";

const loginPage = () => {
  
  return (
    <div className="flex justify-center items-center h-screen rounded-2xl">
      <div className="w-96 p-8 rounded shadow-xl">
        <h1 className="text-5xl font-semibold text-center mb-4">Login</h1>
        <From/>
      </div>
    </div>
  );
};

export default loginPage;
