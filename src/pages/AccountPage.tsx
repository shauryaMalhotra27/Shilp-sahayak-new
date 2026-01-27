import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Button } from '../components/ui/Button';
import { OrderHistory } from '../components/account/OrderHistory';
import { LogOut, User, MapPin, Package } from 'lucide-react';
export function AccountPage() {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);
  if (!user) return null;
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900">My Account</h1>
          <Button
            variant="outline"
            onClick={() => {
              logout();
              navigate('/');
            }}
            leftIcon={<LogOut className="w-4 h-4" />}>

            Sign Out
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                  <User className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="font-bold text-slate-900">{user.name}</h2>
                  <p className="text-sm text-slate-500">{user.email}</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-slate-600">
                <p>{user.phone}</p>
                <p>Member since {new Date(user.joinedDate).getFullYear()}</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-600" />
                Saved Addresses
              </h3>
              {user.addresses.length > 0 ?
              <div className="space-y-4">
                  {user.addresses.map((addr) =>
                <div
                  key={addr.id}
                  className="text-sm text-slate-600 pb-4 border-b border-slate-100 last:border-0 last:pb-0">

                      <p className="font-medium text-slate-900">{addr.name}</p>
                      <p>{addr.line1}</p>
                      <p>
                        {addr.city}, {addr.state} {addr.pincode}
                      </p>
                    </div>
                )}
                </div> :

              <p className="text-sm text-slate-500">No saved addresses.</p>
              }
            </div>

            <div className="bg-blue-50 p-4 rounded-lg text-xs text-blue-800">
              <p className="font-bold mb-1">Privacy Notice</p>
              <p>
                Your data is stored securely and used only for orders and
                support. We do not track your behavior or sell your data.
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Package className="w-5 h-5 text-teal-600" />
                Order History
              </h2>
              <OrderHistory orders={user.orders} />
            </div>
          </div>
        </div>
      </div>
    </div>);

}