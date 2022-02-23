import Head from 'next/head';
import Image from 'next/image';
import Layout from '../src/components/layout/main';

export default function Home() {
	return (
		<Layout>
			<div className='md:container md:mx-auto text-gray-600 body-font'>
				<div className='container px-5 py-20 mx-auto flex flex-col'>
					<div className='lg:w-4/6 mx-auto'>
						<div className='flex flex-col sm:flex-row mt-10'>
							<div className='sm:w-1/3 text-center sm:pr-8 sm:py-8'>
								<div className='inline-flex items-center justify-center text-gray-400'>
									<Image
										className='rounded-full w-40 md:w-35 lg:w-48'
										src='/profile-2.jpg'
										layout='fixed'
										width={200}
										height={200}
										priority
									/>
								</div>
								<div className='flex flex-col items-center text-center justify-center'>
									<h2 className='font-medium title-font mt-4 text-gray-900 text-lg'>
										Rohaizi Mohamed
									</h2>
									<p className='text-base'>
										Front End Web Developer
									</p>
									{/* <span className='inline-flex items-center justify-center px-3 py-1 mt-1 text-sm font-normal leading-none text-red-100 bg-blue-600 rounded-full'>
										Curriculum Vitae
									</span> */}
									{/* <span className="inline-flex  sm:mt-4 mt-4  sm:justify-center">
										<a className="text-gray-500">
										<svg
											fill="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
										</svg>
										</a>
										<a className="ml-3 text-gray-500">
										<svg
											fill="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
										</svg>
										</a>
										<a className="ml-3 text-gray-500">
										<svg
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<rect
											width="20"
											height="20"
											x="2"
											y="2"
											rx="5"
											ry="5"
											></rect>
											<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
										</svg>
										</a>
										<a className="ml-3 text-gray-500">
										<svg
											fill="currentColor"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="0"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<path
											stroke="none"
											d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
											></path>
											<circle cx="4" cy="4" r="2" stroke="none"></circle>
										</svg>
										</a>
									</span> */}
								</div>
							</div>
							<div className='sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left'>
								<p className='text-3xl mb-3'>Biography</p>
								<p className='leading-relaxed text-lg mb-4'>
									Software Engineering's graduate and has over
									2+ years of experience as Front End Web
									Developer with skills in design, analysis,
									development, and testing in various
									web-based applications. Experience in
									designing user interface applications and
									integration of highly transactional and
									scalable applications using HTML, CSS, PHP,
									and Javascript. Comfortable using the
									Laravel framework for web development
									because it has many advanced features and
									tools that can save time for developers to
									code.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
