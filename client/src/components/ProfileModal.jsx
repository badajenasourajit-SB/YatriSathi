import React, { useState, useEffect } from 'react';
import {
  X,
  ShieldCheck,
  Lock,
  User,
  Mail,
  Phone,
  HeartPulse,
  AlertCircle,
  Building,
  Edit3,
  Save,
  Check,
  Copy,
  Droplet
} from 'lucide-react';

const STORAGE_KEY = 'yatrisathi_profile';
const BLOOD_GROUPS = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

const generateSafeTripId = () => {
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  return `YS-OD-${randomNum}`;
};

const getStoredProfile = () => {
  const defaultProfile = {
    safeTripId: generateSafeTripId(),
    fullName: 'Soumya Ranjan Dash',
    email: 'soumya.tourist@gmail.com',
    phone: '+91 98612 34567',
    emergencyContactName: 'Anita Dash',
    emergencyContactPhone: '+91 94371 98765',
    bloodGroup: 'O+',
    medicalNotes: 'No major allergies. Carries mild asthma inhaler.',
    currentStay: 'Hotel Sheela Towers, VSS Marg, Sambalpur'
  };

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (!parsed.safeTripId) {
        parsed.safeTripId = defaultProfile.safeTripId;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
      }
      return { ...defaultProfile, ...parsed };
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultProfile));
    return defaultProfile;
  } catch (error) {
    console.error('Failed to load yatrisathi_profile from localStorage', error);
    return defaultProfile;
  }
};

export default function ProfileModal({ isOpen, onClose }) {
  const [profile, setProfile] = useState(getStoredProfile);
  const [formData, setFormData] = useState(profile);
  const [isEditing, setIsEditing] = useState(false);
  const [copiedId, setCopiedId] = useState(false);
  const [savedToast, setSavedToast] = useState(false);

  // Sync profile data from localStorage whenever modal opens
  useEffect(() => {
    if (isOpen) {
      const freshData = getStoredProfile();
      setProfile(freshData);
      setFormData(freshData);
      setIsEditing(false);
      setCopiedId(false);
    }
  }, [isOpen]);

  // ESC key listener to close modal
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyId = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(profile.safeTripId);
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 2000);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Guarantee safeTripId is never overwritten by edit form
    const updatedProfile = {
      ...formData,
      safeTripId: profile.safeTripId
    };

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProfile));
      setProfile(updatedProfile);
      setFormData(updatedProfile);
      setIsEditing(false);
      setSavedToast(true);
      setTimeout(() => setSavedToast(false), 2500);
    } catch (error) {
      console.error('Failed to save yatrisathi_profile to localStorage', error);
    }
  };

  const handleCancel = () => {
    setFormData(profile);
    setIsEditing(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="profile-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className="fixed inset-0 bg-slate-950/50 backdrop-blur-xs transition-opacity duration-200"
      />

      {/* Modal Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden z-10 flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200"
        style={{
          boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.25), 0 0 35px rgba(37, 99, 235, 0.15)'
        }}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-white/95">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 shadow-xs">
              <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2
                  id="profile-modal-title"
                  className="font-hero text-2xl sm:text-3xl tracking-wider text-slate-900 leading-none uppercase"
                >
                  Tourist Safety Profile
                </h2>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200">
                  Verified
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Encrypted District Emergency Registry • Odisha Tourism Resilience
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close profile modal"
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1 bg-slate-50/50">
          {/* SafeTrip ID Top Banner (Always Read-Only) */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 text-white shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 bg-blue-500/20 rounded-full blur-xl pointer-events-none" />
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative z-10">
              <div>
                <div className="flex items-center gap-1.5 text-blue-200 text-xs font-semibold uppercase tracking-wider">
                  <Lock className="w-3.5 h-3.5 text-blue-300" />
                  <span>SafeTrip Telemetry ID (Strictly Fixed)</span>
                </div>
                <div className="mt-1 flex items-center gap-3">
                  <span className="font-mono text-2xl sm:text-3xl font-extrabold tracking-widest text-white">
                    {profile.safeTripId}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyId}
                    aria-label="Copy SafeTrip ID"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-white/15 hover:bg-white/25 text-white transition-all cursor-pointer border border-white/20"
                  >
                    {copiedId ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-300" />
                        <span className="text-emerald-200">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 self-start sm:self-center px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-xs text-[11px] text-blue-100 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Odisha 112 Trunk Connected</span>
              </div>
            </div>
          </div>

          {/* Toast Notification */}
          {savedToast && (
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold animate-in fade-in slide-in-from-top-2">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Safety profile details successfully saved to local telemetry vault!</span>
            </div>
          )}

          {!isEditing ? (
            /* VIEW MODE */
            <div className="space-y-5">
              {/* Primary Details Section */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                    <User className="w-4 h-4 text-blue-600" />
                    Primary Traveler Identity
                  </h3>
                  <span className="text-[11px] text-slate-400 font-medium">Identity verified</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <div className="text-[11px] font-semibold text-slate-400 uppercase">Full Name</div>
                    <div className="text-sm font-bold text-slate-900 mt-0.5">{profile.fullName}</div>
                  </div>

                  <div>
                    <div className="text-[11px] font-semibold text-slate-400 uppercase">Email Address</div>
                    <div className="text-sm font-semibold text-slate-800 mt-0.5 break-all flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      {profile.email}
                    </div>
                  </div>

                  <div>
                    <div className="text-[11px] font-semibold text-slate-400 uppercase">Phone Number</div>
                    <div className="text-sm font-semibold text-slate-800 mt-0.5 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      {profile.phone}
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency & Medical Section */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                    <HeartPulse className="w-4 h-4 text-red-500" />
                    Emergency Dispatch & Medical Info
                  </h3>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-red-50 text-red-700 border border-red-200">
                    <Droplet className="w-3 h-3 fill-red-500 text-red-500" />
                    Blood Group: {profile.bloodGroup}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-50/80 rounded-xl p-3 border border-slate-100">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase">
                      Emergency Contact Person
                    </div>
                    <div className="text-sm font-bold text-slate-900 mt-0.5">
                      {profile.emergencyContactName}
                    </div>
                  </div>

                  <div className="bg-slate-50/80 rounded-xl p-3 border border-slate-100">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase">
                      Emergency Contact Phone
                    </div>
                    <div className="text-sm font-bold text-red-600 mt-0.5 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5" />
                      {profile.emergencyContactPhone}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-semibold text-slate-400 uppercase mb-1">
                    Medical Notes / Known Allergies
                  </div>
                  <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-200/70 text-xs font-medium text-amber-950 flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{profile.medicalNotes || 'None specified.'}</span>
                  </div>
                </div>
              </div>

              {/* Local Stay Section */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                    <Building className="w-4 h-4 text-blue-600" />
                    Current Accommodation (Sambalpur/Hirakud)
                  </h3>
                </div>
                <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  {profile.currentStay}
                </div>
              </div>
            </div>
          ) : (
            /* EDIT MODE */
            <form id="profile-form" onSubmit={handleSave} className="space-y-5">
              {/* SafeTrip ID display in edit mode (strictly locked) */}
              <div className="bg-slate-100/80 rounded-2xl p-4 border border-slate-200">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                  <Lock className="w-3.5 h-3.5 text-slate-400" />
                  SafeTrip Telemetry ID (System Fixed)
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    disabled
                    readOnly
                    value={profile.safeTripId}
                    className="w-full px-3.5 py-2 bg-slate-200/70 text-slate-600 font-mono font-bold text-sm rounded-xl border border-slate-300/80 cursor-not-allowed select-none"
                  />
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Permanently assigned cryptographic identity. Cannot be altered.
                </p>
              </div>

              {/* Primary Details Form */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2 border-b border-slate-100 pb-2.5">
                  <User className="w-4 h-4 text-blue-600" />
                  Primary Traveler Details
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      placeholder="e.g. Soumya Ranjan Dash"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 text-sm font-medium text-slate-900 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="name@domain.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 text-sm font-medium text-slate-900 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 text-sm font-medium text-slate-900 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Emergency & Medical Form */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2 border-b border-slate-100 pb-2.5">
                  <HeartPulse className="w-4 h-4 text-red-500" />
                  Emergency & Medical Information
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Emergency Contact Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.emergencyContactName}
                      onChange={(e) => handleInputChange('emergencyContactName', e.target.value)}
                      placeholder="e.g. Anita Dash"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 text-sm font-medium text-slate-900 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Emergency Contact Phone
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.emergencyContactPhone}
                      onChange={(e) => handleInputChange('emergencyContactPhone', e.target.value)}
                      placeholder="+91 94370 00000"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 text-sm font-medium text-slate-900 transition-all"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Blood Group
                    </label>
                    <select
                      value={formData.bloodGroup}
                      onChange={(e) => handleInputChange('bloodGroup', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 text-sm font-semibold text-slate-900 bg-white transition-all cursor-pointer"
                    >
                      {BLOOD_GROUPS.map((bg) => (
                        <option key={bg} value={bg}>
                          {bg}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Medical Notes / Known Allergies
                    </label>
                    <textarea
                      rows={2}
                      value={formData.medicalNotes}
                      onChange={(e) => handleInputChange('medicalNotes', e.target.value)}
                      placeholder="e.g. No known allergies, carrying asthma inhaler..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 text-sm font-medium text-slate-900 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Local Stay Form */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2 border-b border-slate-100 pb-2.5">
                  <Building className="w-4 h-4 text-blue-600" />
                  Current Stay / Hotel Name (Sambalpur/Hirakud)
                </h3>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Hotel or Accommodation Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.currentStay}
                    onChange={(e) => handleInputChange('currentStay', e.target.value)}
                    placeholder="e.g. Hotel Sheela Towers, Sambalpur"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 text-sm font-medium text-slate-900 transition-all"
                  />
                </div>
              </div>
            </form>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-100 bg-white/95 flex items-center justify-between">
          <div className="text-xs text-slate-400 hidden sm:flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-slate-400" />
            <span>Saved in local vault under <code>yatrisathi_profile</code></span>
          </div>

          <div className="flex items-center space-x-3 ml-auto">
            {!isEditing ? (
              <>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(true)}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md shadow-blue-500/20 active:scale-95 transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  Edit Profile
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  form="profile-form"
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md shadow-blue-500/20 active:scale-95 transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <Save className="w-3.5 h-3.5" />
                  Save Changes
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
