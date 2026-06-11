import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const [tab, setTab] = useState('login');
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', password: '', phone: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (tab === 'login') {
        const res = await login(formData.email, formData.password);
        if (res.success) {
          navigate('/');
        } else {
          setError(res.message || 'Login failed');
        }
      } else {
        const res = await register(formData);
        if (res.success) {
          setTab('login');
          alert('Registration successful! Please login.');
        } else {
          setError(res.message || 'Registration failed');
        }
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
        
        {/* Left Side: Branding */}
        <div className="md:w-1/2 bg-gradient-to-br from-[#ff3f6c] to-purple-600 p-12 text-white flex flex-col justify-center relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-4xl font-extrabold mb-4">Mini-Bazar</h1>
            <p className="text-xl mb-8 opacity-90">Your premium destination for fashion, beauty, and lifestyle.</p>
            <ul className="space-y-4 mb-8 font-medium">
              <li className="flex items-center gap-2">✨ 100% Original Products</li>
              <li className="flex items-center gap-2">🚚 Free Delivery on ₹999</li>
              <li className="flex items-center gap-2">🔄 Easy 30 Days Returns</li>
            </ul>
          </div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
        </div>

        {/* Right Side: Form */}
        <div className="md:w-1/2 p-8 md:p-12 bg-white">
          <div className="flex justify-between mb-8">
            <button 
              className={`text-2xl font-bold pb-2 border-b-2 transition-colors ${tab === 'login' ? 'border-[#ff3f6c] text-gray-900' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
              onClick={() => setTab('login')}
            >
              Login
            </button>
            <button 
              className={`text-2xl font-bold pb-2 border-b-2 transition-colors ${tab === 'register' ? 'border-[#ff3f6c] text-gray-900' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
              onClick={() => setTab('register')}
            >
              Register
            </button>
          </div>

          {error && <div className="bg-red-50 text-red-500 p-3 rounded mb-4 text-sm font-medium">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-4">
            {tab === 'register' && (
              <div className="flex gap-4">
                <input type="text" name="firstName" placeholder="First Name" required value={formData.firstName} onChange={handleInputChange} className="w-full border p-3 rounded outline-none focus:border-[#ff3f6c] transition-colors" />
                <input type="text" name="lastName" placeholder="Last Name" required value={formData.lastName} onChange={handleInputChange} className="w-full border p-3 rounded outline-none focus:border-[#ff3f6c] transition-colors" />
              </div>
            )}
            
            <input type="email" name="email" placeholder="Email Address" required value={formData.email} onChange={handleInputChange} className="w-full border p-3 rounded outline-none focus:border-[#ff3f6c] transition-colors" />
            
            <input type="password" name="password" placeholder="Password" required minLength={6} value={formData.password} onChange={handleInputChange} className="w-full border p-3 rounded outline-none focus:border-[#ff3f6c] transition-colors" />
            
            {tab === 'register' && (
              <input type="tel" name="phone" placeholder="Phone Number" required value={formData.phone} onChange={handleInputChange} className="w-full border p-3 rounded outline-none focus:border-[#ff3f6c] transition-colors" />
            )}

            <button type="submit" disabled={loading} className="w-full bg-[#ff3f6c] text-white py-3 rounded font-bold hover:bg-[#d63060] transition-colors mt-6 disabled:opacity-70">
              {loading ? 'Processing...' : (tab === 'login' ? 'CONTINUE' : 'REGISTER')}
            </button>
          </form>

          {tab === 'login' && (
            <div className="mt-8 pt-8 border-t border-gray-100">
              <p className="text-sm text-gray-500 text-center mb-4">Demo Credentials</p>
              <div className="bg-gray-50 p-4 rounded text-sm font-mono text-center">
                Email: user@test.com <br/>
                Password: password123
              </div>
            </div>
          )}
          
          <p className="mt-8 text-xs text-gray-500 text-center">
            By continuing, I agree to the <Link to="#" className="text-[#ff3f6c] font-bold">Terms of Use</Link> & <Link to="#" className="text-[#ff3f6c] font-bold">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
