import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300' id='contact'>
            <div>
                <h1 className="w-full text-3xl font-bold text-accent">REACT.</h1>
                <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti doloremque, obcaecati molestias deserunt, molestiae commodi quo cum hic magni suscipit quis nostrum, amet quasi adipisci labore expedita provident sed saepe!</p>
                <div className='flex md:w-[75%] my-6 justify-between'>
                    <FaFacebookSquare size={25}></FaFacebookSquare>
                    <FaDribbbleSquare size={25}></FaDribbbleSquare>
                    <FaGithubSquare size={25}></FaGithubSquare>
                    <FaInstagram size={25}></FaInstagram>
                    <FaTwitterSquare size={25}></FaTwitterSquare>
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between mt-6'>
                <div>
                    <h4 className='font-medium text-gray-400'>Solutions</h4>
                    <ul>
                        <li className='py-2 text-sm'>Analytics</li>
                        <li className='py-2 text-sm'>Marketing</li>
                        <li className='py-2 text-sm'>Commerce</li>
                        <li className='py-2 text-sm'>Insights</li>
                    </ul>
                </div>
                <div>
                    <h4 className='font-medium text-gray-400'>Support</h4>
                    <ul>
                        <li className='py-2 text-sm'>Pricing</li>
                        <li className='py-2 text-sm'>Documentation</li>
                        <li className='py-2 text-sm'>Guides</li>
                        <li className='py-2 text-sm'>API Status</li>
                    </ul>
                </div>
                <div>
                    <h4 className='font-medium text-gray-400'>Company</h4>
                    <ul>
                        <li className='py-2 text-sm'>About</li>
                        <li className='py-2 text-sm'>Blog</li>
                        <li className='py-2 text-sm'>Jobs</li>
                        <li className='py-2 text-sm'>Careers</li>
                    </ul>
                </div>
                <div>
                    <h4 className='font-medium text-gray-400'>Legal</h4>
                    <ul>
                        <li className='py-2 text-sm'>Claim</li>
                        <li className='py-2 text-sm'>Policy</li>
                        <li className='py-2 text-sm'>Terms</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;