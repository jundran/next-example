import getLoggedInUser from "@/utils/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
	const user = await getLoggedInUser()

	if (user) redirect('/dashboard/profile')
	else redirect('/login')
}
