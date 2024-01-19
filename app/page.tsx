import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
	return (
		<div className="w-2/3 max-w-[30rem] h-96">
			<Card className="rounded-3xl py-12 px-14">
				<div className="w-32 h-4 relative -ml-2">
					<Image src={"/devChallenges.svg"} fill alt="logo" />
				</div>
				<div className="w-10/12 text-zinc-800 text-lg font-semibold pt-7">
					Join thousands of learners from around the world{" "}
				</div>
				<div className="w-11/12 text-zinc-800 text-base font-normal pt-4">
					Master web development by making real-life projects. There are
					multiple paths for you to choose
				</div>
				<div className="pt-9">
					<Input
						className="text-zinc-500 text-base font-normal"
						type="email"
						placeholder="Email"
					/>
					<Input
						className="text-zinc-500 text-base font-normal mt-4"
						type="password"
						placeholder="Password"
					/>
					<Button className=" w-full bg-blue-500 rounded-lg text-center text-white text-base font-semibold py-2 mt-6">
						Start coding now
					</Button>
				</div>
				<div className="text-zinc-500 text-sm font-normal text-center pt-8">
					or continue with these social profile
				</div>
				<div className="flex justify-center gap-5 pt-7">
					<div className="w-10 h-10 relative hover:text-yellow-50">
						<Image
							src="/social/Facebook.svg"
							alt="facebook"
							fill
							className="hover:bg-yellow-500 rounded-full"
						/>
					</div>
					<div className="w-10 h-10 rounded-full relative">
						<Image src="/social/Github.svg" alt="facebook" fill />
					</div>
					<div className="w-10 h-10 rounded-full relative">
						<Image src="/social/Google.svg" alt="facebook" fill />
					</div>
					<div className="w-10 h-10 rounded-full relative">
						<Image src="/social/Twitter.svg" alt="facebook" fill />
					</div>
				</div>
				<div className="text-center pt-7">
					<span className="text-zinc-500 text-sm font-normal">
						Adready a member?{" "}
					</span>
					<span className="text-sky-500 text-sm font-normal">Login</span>
				</div>
			</Card>
			<div className="flex justify-between text-zinc-500 text-sm font-normal pt-3">
				<div>
					created by
					<span className="font-semibold underline">username</span>
				</div>
				<div>devChallenges.io</div>
			</div>
		</div>
	);
}
