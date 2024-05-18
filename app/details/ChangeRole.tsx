import { updateUser } from "@/functions";
import { revalidatePath } from "next/cache";

const ChangeRole = ({ email, role }: { email: string; role: string }) => {
  return (
    <form
      action={async () => {
        "use server";
        await updateUser(email, role);
        revalidatePath("/details");
      }}
    >
      <button type="submit">Change Role to {role}</button>
    </form>
  );
};

export default ChangeRole;
