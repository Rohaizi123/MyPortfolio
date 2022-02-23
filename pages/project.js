import Layout from "../src/components/layout/main";
import Image from 'next/image';

function Project() {
	return (
		<Layout>
			<section className='body-font overflow-hidden mb-3'>
				<div className='container px-5 py-10 mx-auto'>
					<header className='text-3xl font-semibold mb-2'>
						Projects
					</header>
					<p>
						This is the list of projects that I learn and develop
						during my work and my leisure time.
					</p>
				</div>
				{/* <div className='container px-5 mx-auto mb-2 space-x-4'>
					<button href="project/all" className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded-2xl shadow'>
						All
					</button>
					<button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded-2xl shadow'>
						Work
					</button>
					<button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded-2xl shadow'>
						Personal
					</button>
				</div> */}
				<div className='container px-5 mx-auto flex flex-wrap'>
					<div className='md:w-2/5 w-full overflow-hidden rounded-lg border-2 my-2'>
						<Image
							alt='feature'
							className='object-cover object-center h-full w-full border-solid border-2 border-gray-150'
							src='/ikhlas.gif'
							width={500}
							height={250}
							priority
						/>
					</div>
					<div className='md:w-3/5 md:pl-6 my-2'>
						<a
							className='text-2xl underline font-semibold'
							href='https://ikhlas.fund'
							target='_blank'
						>
							Ikhlas.fund
						</a>
						<p className='leading-relaxed text-base'>
							Ikhlas. fund is a crowdfunding platform that allows
							users to make donations. Users can choose a campaign
							and can pay via a payment gateway and also this
							system has recurring features for the users who want
							to donate every month. This platform included with
							admin dashboard for data analysis.
						</p>
						<div className='grid grid-cols-2 gap-2  md:grid-cols-3 md:gap-3 text-center mt-2'>
							<div className='text-sm px-2 py-0 bg-red-200 text-black rounded-full'>
								Laravel
							</div>
							<div className='text-sm px-2 py-0 bg-yellow-200 text-black rounded-full'>
								Vue JS
							</div>
							<div className='text-sm px-2 py-0 bg-blue-200 text-black rounded-full'>
								MySQL
							</div>
						</div>
					</div>
				</div>

				<div className='container px-5 mx-auto flex flex-wrap mt-2'>
					<div className='md:w-2/5 w-full overflow-hidden rounded-lg border-2 my-2'>
						<Image
							alt='feature'
							className='object-cover object-center h-full w-full border-solid border-2 border-gray-150'
							src='/kitabantu.gif'
							width={500}
							height={250}
							priority
						/>
					</div>
					<div className='md:w-3/5 md:pl-6 my-2'>
						<a
							className='text-2xl underline font-semibold'
							href='https://kitabantu.com/ms/home'
							target='_blank'
						>
							KitaBantu.com
						</a>
						<p className='leading-relaxed text-base'>
							KitaBantu.com is a multi-tenant crowdfunding
							platform that allows the user to create their own
							organization. Users can donate to any registered
							organization in this system. This system included
							with payment gateway and admin dashboard for data
							analysis.
						</p>
						<div className='grid grid-cols-2 gap-2  md:grid-cols-3 md:gap-3 text-center mt-2'>
							<div className='text-sm px-2 py-0 bg-red-200 text-black rounded-full'>
								Laravel
							</div>
							<div className='text-sm px-2 py-0 bg-yellow-200 text-black rounded-full'>
								Vue JS
							</div>
							<div className='text-sm px-2 py-0 bg-blue-200 text-black rounded-full'>
								MySQL
							</div>
						</div>
					</div>
				</div>

				<div className='container px-5 mx-auto flex flex-wrap mt-2'>
					<div className='md:w-2/5 w-full overflow-hidden rounded-lg border-2 my-2'>
						<Image
							alt='feature'
							className='object-cover object-center h-full w-full border-solid border-2 border-gray-150'
							src='/terrabina.gif'
							width={500}
							height={250}
							priority
						/>
					</div>
					<div className='md:w-3/5 md:pl-6 my-2'>
						<a
							className='text-2xl underline font-semibold'
							href='https://terrabina.app/'
							target='_blank'
						>
							TerraBina - Digital Construction Progress Monitoring
							Report
						</a>
						<p className='leading-relaxed text-base'>
							TerraBina is a construction progress monitoring
							reports systems that have been using in the
							construction industry. This system can visualize the
							GIS (Geographic Information System) model data that
							can be used to track the progress of the
							construction.
						</p>
						<div className='grid grid-cols-2 gap-2  md:grid-cols-3 md:gap-3 text-center mt-2'>
							<div className='text-sm px-2 py-0 bg-red-200 text-black rounded-full'>
								Laravel
							</div>
							<div className='text-sm px-2 py-0 bg-blue-200 text-black rounded-full'>
								MySQL
							</div>
							<div className='text-sm px-2 py-0 bg-yellow-200 text-black rounded-full'>
								Mapbox
							</div>
							<div className='text-sm px-2 py-0 bg-blue-200 text-black rounded-full'>
								Three JS
							</div>
						</div>
					</div>
				</div>

				<div className='container px-5 mx-auto flex flex-wrap mt-2'>
					<div className='md:w-2/5 w-full overflow-hidden rounded-lg border-2 my-2'>
						<Image
							alt='feature'
							className='object-cover object-center h-full w-full border-solid border-2 border-gray-150'
							src='/todo-app.gif'
							width={500}
							height={250}
							priority
						/>
					</div>
					<div className='md:w-3/5 md:pl-6 my-2'>
						<a
							className='text-2xl underline font-semibold'
							href='https://laravel-vuejs-todo-list.herokuapp.com/'
							target='_blank'
						>
							Todo-APP - Laravel Vue JS
						</a>
						<p className='leading-relaxed text-base'>
							Todo-app is a simple to-do system that you can add a
							task and manage for example tick when it's done and
							deletes it. This system also can count the remaining
							task and sort the task.
						</p>
						<span className='mt-3'>
							Github :
							<a
								className='underline underline-offset-1 text-blue-700'
								href='https://github.com/Rohaizi123/laravel-vuejs-todo-list'
							>
								https://github.com/Rohaizi123/laravel-vuejs-todo-list
							</a>
						</span>
						<div className='grid grid-cols-2 gap-2  md:grid-cols-3 md:gap-3 text-center mt-2'>
							<div className='text-sm px-2 py-0 bg-red-200 text-black rounded-full'>
								Laravel
							</div>
							<div className='text-sm px-2 py-0 bg-yellow-200 text-black rounded-full'>
								Vue JS
							</div>
							<div className='text-sm px-2 py-0 bg-blue-200 text-black rounded-full'>
								MySQL
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}

export default Project;
