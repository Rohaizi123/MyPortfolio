import Layout from '../src/components/layout/main';

function Contact() {
	return (
		<Layout>
			<section className='text-gray-600 body-font relative'>
				<div className='container py-10 pl-2 pr-2 mx-auto flex'>
					<div className='bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow md:shadow-xl'>
						<div className='p-4 md:w-1/2'>
							<h2 className='title-font font-semibold text-gray-900 tracking-widest text-xs'>
								ADDRESS
							</h2>
							<p className='mt-1'>
								Bandar Baru Bangi, Selangor, Malaysia
							</p>
						</div>
						<div className='p-4 md:w-1/2'>
							<h2 className='title-font font-semibold text-gray-900 tracking-widest text-xs mt-1'>
								EMAIL
							</h2>
							<a className='text-indigo-500 leading-relaxed'>
								rohaizimohamed96@gmail.com
							</a>
							<h2 className='title-font font-semibold text-gray-900 tracking-widest text-xs mt-1'>
								GITHUB
							</h2>
							<a
								className='text-indigo-500 leading-relaxed'
								href='https://github.com/Rohaizi123'
							>
								https://github.com/Rohaizi123
							</a>
							<h2 className='title-font font-semibold text-gray-900 tracking-widest text-xs mt-1'>
								PHONE
							</h2>
							<p className='leading-relaxed'>019-9025673</p>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}

export default Contact;
