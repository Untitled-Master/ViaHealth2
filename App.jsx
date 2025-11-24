import React, { useState } from 'react';
import { Heart, Home, Calendar, User, Clock, CreditCard, FileText, Phone, MapPin, Check } from 'lucide-react';

export default function ViaHealthApp() {
  const [screen, setScreen] = useState('home');
  const [selectedService, setSelectedService] = useState(null);
  const [bookingStep, setBookingStep] = useState(1);
  const [editingBooking, setEditingBooking] = useState(null);
  
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      service: 'Blood Test',
      icon: '🩸',
      doctor: 'Dr. Sarah Johnson',
      date: 'Dec 25, 2024',
      time: '2:00 PM',
      status: 'Upcoming',
      price: '$45'
    },
    {
      id: 2,
      service: 'Health Checkup',
      icon: '🏥',
      doctor: 'Dr. Michael Chen',
      date: 'Dec 20, 2024',
      time: '10:00 AM',
      status: 'Completed',
      price: '$80'
    }
  ]);

  const [medicalInfo, setMedicalInfo] = useState({
    conditions: ['Diabetes Type 2', 'High Blood Pressure'],
    allergies: ['Penicillin'],
    medications: ['Metformin 500mg', 'Lisinopril 10mg']
  });

  const [profile, setProfile] = useState({
    name: 'John Smith',
    age: '68',
    phone: '+1 (555) 123-4567',
    email: 'john.smith@email.com',
    address: '123 Oak Street, Springfield',
    emergencyContact: 'Jane Smith - (555) 987-6543',
    paymentMethod: 'Cash'
  });

  const services = [
    { id: 1, name: 'Blood Test', icon: '🩸', price: '$45', time: '30 min' },
    { id: 2, name: 'Health Checkup', icon: '🏥', price: '$80', time: '45 min' },
    { id: 3, name: 'Vaccination', icon: '💉', price: '$35', time: '20 min' },
    { id: 4, name: 'IV Therapy', icon: '💧', price: '$120', time: '60 min' },
    { id: 5, name: 'Wound Care', icon: '🩹', price: '$60', time: '40 min' },
    { id: 6, name: 'Physical Therapy', icon: '🤸', price: '$90', time: '50 min' }
  ];

  const HomeScreen = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Welcome to ViaHealth</h2>
        <p className="text-blue-100">Professional healthcare at your doorstep</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Our Services</h3>
        <div className="grid grid-cols-2 gap-4">
          {services.map(service => (
            <div
              key={service.id}
              onClick={() => {
                setSelectedService(service);
                setScreen('booking');
                setBookingStep(1);
              }}
              className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition cursor-pointer"
            >
              <div className="text-4xl mb-2">{service.icon}</div>
              <h4 className="font-semibold text-gray-800 text-sm mb-1">{service.name}</h4>
              <div className="flex justify-between items-center text-xs text-gray-500">
                <span className="font-bold text-blue-600">{service.price}</span>
                <span>{service.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-green-50 rounded-2xl p-4 border border-green-100">
        <h4 className="font-semibold text-green-800 mb-2">🎯 Why Choose ViaHealth?</h4>
        <ul className="text-sm text-green-700 space-y-1">
          <li>✓ Certified medical professionals</li>
          <li>✓ Same-day service available</li>
          <li>✓ Safe & convenient</li>
          <li>✓ Easy payment options</li>
        </ul>
      </div>
    </div>
  );

  const BookingScreen = () => (
    <div className="space-y-6">
      <button
        onClick={() => setScreen('home')}
        className="text-blue-600 text-sm font-medium"
      >
        ← Back
      </button>

      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <div className="text-4xl">{selectedService.icon}</div>
          <div>
            <h3 className="font-bold text-gray-800">{selectedService.name}</h3>
            <p className="text-sm text-gray-500">{selectedService.price} • {selectedService.time}</p>
          </div>
        </div>

        <div className="flex gap-2 mb-6">
          {[1, 2, 3].map(step => (
            <div
              key={step}
              className={`flex-1 h-2 rounded-full ${
                bookingStep >= step ? 'bg-blue-500' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>

        {bookingStep === 1 && (
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800">Select Date & Time</h4>
            <div className="grid grid-cols-3 gap-2">
              {['Today', 'Tomorrow', 'Dec 26'].map(date => (
                <button
                  key={date}
                  className="py-3 px-4 rounded-xl border-2 border-blue-500 bg-blue-50 text-blue-600 font-medium text-sm"
                >
                  {date}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2">
              {['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM', '6:00 PM'].map(time => (
                <button
                  key={time}
                  className="py-2 px-3 rounded-xl border border-gray-300 hover:border-blue-500 hover:bg-blue-50 text-sm"
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        )}

        {bookingStep === 2 && (
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800">Your Address</h4>
            <input
              type="text"
              placeholder="Street Address"
              className="w-full p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none"
            />
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="City"
                className="flex-1 p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none"
              />
              <input
                type="text"
                placeholder="ZIP"
                className="w-24 p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none"
            />
            <textarea
              placeholder="Special instructions (optional)"
              rows="3"
              className="w-full p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none"
            />
          </div>
        )}

        {bookingStep === 3 && (
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800">Payment Method</h4>
            <div className="space-y-2">
              {['Credit Card', 'PayPal', 'Cash on Service'].map(method => (
                <button
                  key={method}
                  className="w-full p-4 rounded-xl border-2 border-blue-500 bg-blue-50 text-left flex items-center justify-between"
                >
                  <span className="font-medium text-blue-600">{method}</span>
                  <Check className="text-blue-600" size={20} />
                </button>
              ))}
            </div>
            <div className="bg-gray-50 rounded-xl p-4 mt-6">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Service</span>
                <span className="font-semibold">{selectedService.price}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Service Fee</span>
                <span className="font-semibold">$5</span>
              </div>
              <div className="border-t border-gray-300 my-2"></div>
              <div className="flex justify-between">
                <span className="font-bold text-gray-800">Total</span>
                <span className="font-bold text-blue-600 text-lg">
                  ${parseInt(selectedService.price.slice(1)) + 5}
                </span>
              </div>
            </div>
          </div>
        )}

        <button
          onClick={() => {
            if (bookingStep < 3) {
              setBookingStep(bookingStep + 1);
            } else {
              setScreen('confirmation');
            }
          }}
          className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold mt-6 hover:bg-blue-700 transition"
        >
          {bookingStep === 3 ? 'Confirm Booking' : 'Continue'}
        </button>
      </div>
    </div>
  );

  const ConfirmationScreen = () => (
    <div className="space-y-6 text-center">
      <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
        <Check className="text-green-600" size={40} />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Booking Confirmed!</h2>
        <p className="text-gray-600">Your healthcare professional is on the way</p>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-left">
        <h3 className="font-semibold text-gray-800 mb-4">Booking Details</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="text-2xl">{selectedService.icon}</div>
            <div>
              <p className="font-medium text-gray-800">{selectedService.name}</p>
              <p className="text-sm text-gray-500">Today at 2:00 PM</p>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-3">
            <p className="text-sm text-gray-600 mb-1">Booking ID: #VH12345</p>
            <p className="text-sm text-gray-600">Estimated arrival: 25-35 minutes</p>
          </div>
        </div>
      </div>

      <button
        onClick={() => setScreen('home')}
        className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
      >
        Back to Home
      </button>
    </div>
  );

  const BookingsScreen = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">My Appointments</h2>
      
      {appointments.map(apt => (
        <div key={apt.id} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-start gap-4 mb-4">
            <div className="text-3xl">{apt.icon}</div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-800">{apt.service}</h3>
              <p className="text-sm text-gray-500 mt-1">👨‍⚕️ {apt.doctor}</p>
              <div className="flex gap-4 mt-2 text-sm text-gray-600">
                <span>📅 {apt.date}</span>
                <span>🕐 {apt.time}</span>
              </div>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              apt.status === 'Upcoming' 
                ? 'bg-blue-100 text-blue-600' 
                : 'bg-green-100 text-green-600'
            }`}>
              {apt.status}
            </span>
          </div>
          
          {apt.status === 'Upcoming' && (
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setEditingBooking(apt);
                  setScreen('edit-booking');
                }}
                className="flex-1 py-2 rounded-xl border-2 border-blue-500 text-blue-600 font-medium text-sm"
              >
                Edit
              </button>
              <button className="flex-1 py-2 rounded-xl bg-red-50 border-2 border-red-200 text-red-600 font-medium text-sm">
                Cancel
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const EditBookingScreen = () => (
    <div className="space-y-6">
      <button
        onClick={() => setScreen('bookings')}
        className="text-blue-600 text-sm font-medium"
      >
        ← Back to Appointments
      </button>

      <h2 className="text-2xl font-bold text-gray-800">Edit Appointment</h2>

      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-2">Service</label>
          <input
            type="text"
            value={editingBooking?.service}
            className="w-full p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none"
            readOnly
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 block mb-2">Doctor</label>
          <select className="w-full p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none">
            <option>{editingBooking?.doctor}</option>
            <option>Dr. Emily Rodriguez</option>
            <option>Dr. James Wilson</option>
            <option>Dr. Maria Garcia</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-2">Date</label>
            <input
              type="date"
              defaultValue="2024-12-25"
              className="w-full p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-2">Time</label>
            <select className="w-full p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none">
              <option>2:00 PM</option>
              <option>9:00 AM</option>
              <option>11:00 AM</option>
              <option>4:00 PM</option>
              <option>6:00 PM</option>
            </select>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 block mb-2">Special Notes</label>
          <textarea
            placeholder="Any special requests or instructions..."
            rows="3"
            className="w-full p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>

      <button
        onClick={() => setScreen('bookings')}
        className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
      >
        Save Changes
      </button>
    </div>
  );

  const ReportsScreen = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Medical Records</h2>

      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-800">Health Conditions</h3>
          <button className="text-blue-600 text-sm font-medium">+ Add</button>
        </div>
        <div className="space-y-2">
          {medicalInfo.conditions.map((condition, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-red-50 rounded-xl">
              <span className="text-sm text-gray-800">{condition}</span>
              <button className="text-red-600 text-xs">Remove</button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-800">Allergies</h3>
          <button className="text-blue-600 text-sm font-medium">+ Add</button>
        </div>
        <div className="space-y-2">
          {medicalInfo.allergies.map((allergy, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-orange-50 rounded-xl">
              <span className="text-sm text-gray-800">⚠️ {allergy}</span>
              <button className="text-orange-600 text-xs">Remove</button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-800">Current Medications</h3>
          <button className="text-blue-600 text-sm font-medium">+ Add</button>
        </div>
        <div className="space-y-2">
          {medicalInfo.medications.map((med, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-green-50 rounded-xl">
              <span className="text-sm text-gray-800">💊 {med}</span>
              <button className="text-green-700 text-xs">Remove</button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
        <h3 className="font-semibold text-gray-800 mb-4">Previous Test Results</h3>
        <div className="space-y-3">
          {['Blood Test - Dec 20, 2024', 'Health Checkup - Nov 15, 2024'].map((test, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-blue-50 rounded-xl">
              <span className="text-sm text-gray-800">📄 {test}</span>
              <button className="text-blue-600 text-xs font-medium">View</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ProfileScreen = () => (
    <div className="space-y-6">
      <div className="text-center">
        <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <User className="text-blue-600" size={40} />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">{profile.name}</h2>
        <p className="text-gray-500 text-sm">{profile.email}</p>
      </div>

      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 space-y-4">
        <h3 className="font-semibold text-gray-800">Personal Information</h3>
        
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-2">Full Name</label>
          <input
            type="text"
            value={profile.name}
            className="w-full p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-2">Age</label>
            <input
              type="text"
              value={profile.age}
              className="w-full p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-2">Phone</label>
            <input
              type="tel"
              value={profile.phone}
              className="w-full p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 block mb-2">Address</label>
          <input
            type="text"
            value={profile.address}
            className="w-full p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 block mb-2">Emergency Contact</label>
          <input
            type="text"
            value={profile.emergencyContact}
            className="w-full p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 space-y-4">
        <h3 className="font-semibold text-gray-800">Payment Settings</h3>
        
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-2">Preferred Payment Method</label>
          <select 
            value={profile.paymentMethod}
            className="w-full p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none"
          >
            <option>Cash</option>
            <option>Credit Card</option>
            <option>PayPal</option>
            <option>Insurance</option>
          </select>
        </div>

        {profile.paymentMethod === 'Credit Card' && (
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-2">Card Number</label>
            <input
              type="text"
              placeholder="**** **** **** 1234"
              className="w-full p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none"
            />
          </div>
        )}
      </div>

      <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition">
        Save Profile
      </button>

      <button className="w-full bg-red-50 text-red-600 py-4 rounded-xl font-semibold border-2 border-red-200">
        Logout
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-md mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="text-blue-600" size={28} fill="currentColor" />
            <span className="text-xl font-bold text-gray-800">ViaHealth</span>
          </div>
          <button className="bg-blue-50 p-2 rounded-full">
            <User className="text-blue-600" size={20} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-6 py-6">
        {screen === 'home' && <HomeScreen />}
        {screen === 'booking' && <BookingScreen />}
        {screen === 'confirmation' && <ConfirmationScreen />}
        {screen === 'bookings' && <BookingsScreen />}
        {screen === 'edit-booking' && <EditBookingScreen />}
        {screen === 'reports' && <ReportsScreen />}
        {screen === 'profile' && <ProfileScreen />}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="max-w-md mx-auto px-6 py-3 flex justify-around">
          {[
            { icon: Home, label: 'Home', id: 'home' },
            { icon: Calendar, label: 'Bookings', id: 'bookings' },
            { icon: FileText, label: 'Reports', id: 'reports' },
            { icon: User, label: 'Profile', id: 'profile' }
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setScreen(item.id)}
              className="flex flex-col items-center gap-1"
            >
              <item.icon
                size={22}
                className={screen === item.id ? 'text-blue-600' : 'text-gray-400'}
              />
              <span
                className={`text-xs ${
                  screen === item.id ? 'text-blue-600 font-medium' : 'text-gray-400'
                }`}
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}