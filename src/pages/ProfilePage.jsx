"use client";

import { useState } from "react";
import {
  Home,
  Search,
  ShoppingBag,
  User,
  Activity,
  FileText,
  Twitter,
  Send,
  BookOpen,
  Star,
  Bell,
  Settings,
  Copy,
  MapPin,
  Sun,
  MessageCircle,
  Archive,
  BarChart,
  ClipboardList,
  LayoutDashboard,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";

const SidebarItem = ({ icon, label, active }) => (
  <div
    className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer ${active ? "bg-blue-100 text-blue-700 font-semibold" : "hover:bg-gray-100"
      }`}
  >
    {icon}
    <span>{label}</span>
  </div>
);

const BalanceTag = ({ label, color, icon }) => (
  <div
    className={`px-3 py-1 text-sm rounded-full flex items-center gap-2 ${color === "blue" ? "bg-blue-100 text-blue-700" : "bg-red-100 text-red-700"
      }`}
  >
    {icon === "circle" && <div className="w-2 h-2 bg-current rounded-full" />}
    {label}
  </div>
);

const LanguageSelector = () => (
  <select className="border rounded-md px-2 py-1 text-sm">
    <option>EN</option>
    <option>FR</option>
    <option>ES</option>
  </select>
);

const tabData = [
  { value: "profile", label: "Dashboard", icon: <LayoutDashboard size={16} /> },
  { value: "courses", label: "Courses", icon: <BookOpen size={16} /> },
  { value: "assignments", label: "Assignments", icon: <ClipboardList size={16} /> },
  { value: "exams", label: "Exams", icon: <FileText size={16} /> },
  { value: "progress", label: "Progress", icon: <BarChart size={16} /> },
  { value: "discussions", label: "Discussions", icon: <MessageCircle size={16} /> },
  { value: "settings", label: "Settings", icon: <Settings size={16} /> },
];

export default function ProfilePage() {
  const [username, setUsername] = useState("username123");
  const [bio, setBio] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const removeImage = () => {
    setProfileImage(null);
  };
  const [activeTab, setActiveTab] = useState("profile");

  const index = tabData.findIndex((t) => t.value === activeTab);

  const handleSwipe = (dir) => {
    if (dir === "LEFT" && index < tabData.length - 1) {
      setActiveTab(tabData[index + 1].value);
    } else if (dir === "RIGHT" && index > 0) {
      setActiveTab(tabData[index - 1].value);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("LEFT"),
    onSwipedRight: () => handleSwipe("RIGHT"),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <div className="w-[220px] border-r p-4 flex flex-col">
        <div className="flex items-center gap-2 mb-8">
          <div className="bg-blue-600 text-white p-2 rounded-md font-bold">
            S
          </div>
          <span className="font-bold text-lg">S8ACADEMY</span>
        </div>

        <nav className="space-y-1 flex-1">
          <SidebarItem icon={<Home size={18} />} label="Dashboard" />
          <SidebarItem icon={<Search size={18} />} label="Browse Courses" />
          <SidebarItem icon={<BookOpen size={18} />} label="My Courses" />
          <SidebarItem icon={<User size={18} />} label="Profile" active />
          <div className="pt-4" />
          <SidebarItem icon={<Activity size={18} />} label="Progress" />
          <SidebarItem icon={<FileText size={18} />} label="Assignments" />
          <SidebarItem icon={<FileText size={18} />} label="Exams" />
          <div className="pt-4" />
          <SidebarItem icon={<Send size={18} />} label="Discussions" />
          <SidebarItem icon={<BookOpen size={18} />} label="Resources" />
          <SidebarItem
            icon={<span className="font-bold text-[13px]">S8</span>}
            label="About S8Academy"
          />
        </nav>

        <div className="text-xs text-gray-400 mt-auto">© Mavia 2021</div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <header className="border-b">
          <div className="flex justify-between items-center p-4 bg-white shadow-md rounded-md">
            <h1 className="text-2xl font-extrabold text-purple-600">Student Dashboard</h1>
            <div className="flex items-center gap-4">
              <BalanceTag label="5 Courses" color="purple" />
              <BalanceTag label="2 Assignments Due" color="red" />
              <BalanceTag label="92% Progress" color="blue" icon="circle" />

              <LanguageSelector />

              <Button variant="ghost" size="icon" className="text-purple-600 hover:text-purple-800">
                <Sun size={20} />
              </Button>

              <div className="relative">
                <Button variant="ghost" size="icon" className="text-blue-600 hover:text-blue-800">
                  <Bell size={20} />
                </Button>
                <span className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              </div>

              <div className="flex items-center gap-2 bg-purple-50 rounded-full px-3 py-1">
                <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                  S
                </div>
                <span className="text-sm font-medium text-purple-700">Sulayman</span>
                <span className="text-xs text-purple-400 truncate max-w-[70px]">
                  #STU00123
                </span>
              </div>
            </div>
          </div>


          {/* Tabs */}
          <Tabs
            defaultValue="profile"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            {/* Tab Navigation */}
            <TabsList className="w-full overflow-x-auto flex-nowrap scrollbar-hide px-4 py-2">
              {tabData.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="px-6 py-3 text-sm font-semibold text-gray-600 hover:text-purple-600 data-[state=active]:text-purple-600 flex items-center gap-2 transition-colors duration-300 ease-in-out"
                  style={{ borderBottom: 'none' }}
                >
                  {tab.icon}
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>


            {/* Swipeable Content */}
            <div {...swipeHandlers} className="p-2 relative w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="absolute w-full"
                >
                  {activeTab === "profile"}
                  {activeTab === "property"}
                  {activeTab === "ledger"}
                  {activeTab === "notifications"}
                  {activeTab === "favorites"}
                  {activeTab === "settings"}
                </motion.div>
              </AnimatePresence>
            </div>

            <TabsContent value="profile" className="p-2 space-y-6">
              {/* Public Profile Card */}
              <div className="border rounded-xl p-5 shadow-sm bg-white space-y-4">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Public Profile</h2>
                  <p className="text-sm text-gray-500">
                    Share your public profile link with others to showcase your activity.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex-1 px-4 py-2 bg-gray-100 border text-sm rounded-md text-gray-700 truncate">
                    https://app.mavia.com/profile/{username}
                  </div>
                  <Button variant="outline" size="icon" className="shrink-0">
                    <Copy size={18} />
                  </Button>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-700"
                  >
                    <MapPin size={16} />
                    View location
                  </Button>
                </div>
              </div>

              {/* Profile Picture Card */}
              <div className="border rounded-xl p-5 shadow-sm bg-white space-y-4">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Profile Picture</h2>
                  <p className="text-sm text-gray-500">
                    Upload your avatar or a picture of yourself to personalize your profile.
                  </p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                    {profileImage ? (
                      <img
                        src={profileImage}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-3xl text-blue-600 font-bold">M</span>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <Input type="file" onChange={handleImageUpload} />
                    {profileImage && (
                      <Button variant="destructive" size="sm" onClick={removeImage}>
                        Remove
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              {/* Edit Info Card */}
              <div className="border rounded-xl p-5 shadow-sm bg-white space-y-6">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Edit Info</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Username
                    </label>
                    <Input
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                    <Textarea
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      rows={4}
                      placeholder="Tell us something about yourself..."
                    />
                  </div>
                  <div>
                    <Button className="mt-2">Save Changes</Button>
                  </div>
                </div>
              </div>

              {/* Added Academic & Tech Course Registration Section */}
              <div className="border rounded-xl p-5 shadow-sm bg-white space-y-6">
                <h2 className="text-lg font-semibold text-gray-900">
                  Academic & Course Registration Details
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Highest Level of Education
                    </label>
                    <select className="w-full border-gray-300 rounded-md p-2">
                      <option value="">Select your highest level</option>
                      <option value="secondary">Secondary School</option>
                      <option value="diploma">Diploma</option>
                      <option value="undergraduate">Undergraduate</option>
                      <option value="postgraduate">Postgraduate</option>
                      <option value="self_taught">Self-taught</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Institution (if any)
                    </label>
                    <Input placeholder="e.g., Lagos State University or N/A" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Field of Study / Interest
                    </label>
                    <Input placeholder="e.g., Computer Science, Software Engineering" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Programming Languages / Tools You Know
                    </label>
                    <Textarea
                      rows={3}
                      placeholder="e.g., JavaScript, Python, React, Git"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Current Experience Level
                    </label>
                    <select className="w-full border-gray-300 rounded-md p-2">
                      <option value="">Select your experience level</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Learning Goals & Motivation
                    </label>
                    <Textarea
                      rows={4}
                      placeholder="Why are you taking this course? What do you hope to achieve?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Certifications or Portfolio Links (if any)
                    </label>
                    <Textarea
                      rows={3}
                      placeholder="e.g., GitHub: github.com/yourusername or certificates"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

          </Tabs>
        </header>
      </div>
    </div>
  );
}
