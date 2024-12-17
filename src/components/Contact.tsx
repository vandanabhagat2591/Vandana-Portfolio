import {useState} from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', mobileNumber:'',message: '' });
  const [error,setError]=useState({ name: '', email: '', mobileNumber:''});
  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError({...error, [e.target.name]: '' });
  };

  const handleSubmit =async  (e:any) => {
    e.preventDefault();
    if(formData.name ==='' && formData.email ==='' && formData.mobileNumber ==='') {
      setError({name:'Please Enter Name',email:'Please Enter Email Address',mobileNumber:'Please Enter Mobile Number'});
    }else if(formData.name ===''){
      setError({name:'Please Enter Name',email:'',mobileNumber:''});
    }else  if(formData.email ===''){
      setError({name:'',email:'Please Enter Email Address',mobileNumber:''});
    }else  if(formData.mobileNumber ===''){
      setError({name:'',email:'',mobileNumber:'Please Enter Mobile Number'});
    }else{
      await emailjs
      .send(
        'service_cgs8s0c', // Replace with your EmailJS service ID
        'template_ycbozg3', // Replace with your EmailJS template ID
        {
          to_name:'vandana',
          name: formData.name,
          email: formData.email,
          mobile_number: formData.mobileNumber,
          message: formData.message,
        },
        'QpG56UOe2qJEz_yMk' // Replace with your EmailJS Public key
      )
      .then((response) => {
      if(response.status === 200) {
        toast.success('Form submitted successfully!');
        setFormData({ name: '', email: '', mobileNumber:'',message: '' });
        setError({ name:'', email:'', mobileNumber:''});
      }
      })
      .catch((error) => {
        console.error('FAILED...', error);
        toast.error('Failed to submit the form. Please try again.');
      });
    }
   
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-600 mr-3" />
                  <span>vandana.bhagat2591@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-600 mr-3" />
                  <span>+91 8699341378</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                  <span>Haryana,India</span>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e)=>handleChange(e)}
                  required
                />
               {error.name && <span className='colorRed'>{error.name}</span>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e)=>handleChange(e)}
                  required
                />
                 {error.email && <span className='colorRed'>{error.email}</span>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Mobile Number
                </label>
                <input
                  type="number"
                  id="mobileNumber"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  name="mobileNumber"
                  placeholder="Your Mobile Number"
                  value={formData.mobileNumber}
                  onChange={(e)=>handleChange(e)}
                  required
                />
                 {error.mobileNumber && <span className='colorRed'>{error.mobileNumber}</span>}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e)=>handleChange(e)}
                  required
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                onClick={(e)=>handleSubmit(e)}
              >
                Send Message
              </button>
            </form>
            {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;