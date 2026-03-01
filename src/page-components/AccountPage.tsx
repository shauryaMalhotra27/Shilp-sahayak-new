import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../hooks/useAuth';
import { Button } from '../components/ui/Button';
import { OrderHistory } from '../components/account/OrderHistory';
import { LogOut, User, MapPin, Package } from 'lucide-react';
import { useAdminData } from '../hooks/useAdminData';
export function AccountPage() {
  const { user, logout, isAuthenticated } = useAuth();
  const adminData = useAdminData();
  const router = useRouter();
  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);
  if (!user) return null;
  return (
    <div className="min-h-screen bg-muted py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-foreground">My Account</h1>
          <Button
            variant="outline"
            onClick={() => {
              logout();
              router.push('/');
            }}
            leftIcon={<LogOut className="w-4 h-4" />}>

            Sign Out
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-xl border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center text-muted-foreground">
                  <User className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="font-bold text-foreground">{user.name}</h2>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>{user.phone}</p>
                <p>Member since {new Date(user.joinedDate).getFullYear()}</p>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Saved Addresses
              </h3>
              {user.addresses.length > 0 ?
              <div className="space-y-4">
                  {user.addresses.map((addr) =>
                <div
                  key={addr.id}
                  className="text-sm text-muted-foreground pb-4 border-b border-border last:border-0 last:pb-0">

                      <p className="font-medium text-foreground">{addr.name}</p>
                      <p>{addr.line1}</p>
                      <p>
                        {addr.city}, {addr.state} {addr.pincode}
                      </p>
                    </div>
                )}
                </div> :

              <p className="text-sm text-muted-foreground">{adminData.global.account.emptyAddressesText}</p>
              }
            </div>

            <div className="bg-info/10 p-4 rounded-lg text-xs text-info">
              <p className="font-bold mb-1">{adminData.global.account.privacyNoticeTitle}</p>
              <p>
                {adminData.global.account.privacyNoticeBody}
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-card p-6 rounded-xl border border-border">
              <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Package className="w-5 h-5 text-primary" />
                Order History
              </h2>
              <OrderHistory orders={user.orders} />
            </div>
          </div>
        </div>
      </div>
    </div>);

}
export default AccountPage;
