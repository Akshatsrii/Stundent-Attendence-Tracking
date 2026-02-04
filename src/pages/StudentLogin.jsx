import { SignIn } from "@clerk/clerk-react";

const StudentLogin = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* LEFT BRAND SECTION */}
      <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-300/20 via-transparent to-yellow-600/20"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-56 h-56 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="text-center px-12 z-10 max-w-lg">
          {/* Logo Icon */}
          <div className="mb-10">
            <div className="w-28 h-28 bg-white/20 rounded-3xl mx-auto mb-8 flex items-center justify-center backdrop-blur-md shadow-2xl border border-white/30">
              <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
          </div>
          
          <h1 className="text-7xl font-black text-white mb-4 tracking-tight drop-shadow-lg">
            EDUFLOW
          </h1>
          <p className="text-2xl text-yellow-50 font-light tracking-wide mb-12">
            Smart University Management System
          </p>
          
          {/* Feature List */}
          <div className="space-y-5 text-yellow-50">
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-lg font-medium">Secure & Easy Access</span>
            </div>
            
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-lg font-medium">Track Your Progress</span>
            </div>
            
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-lg font-medium">Stay Connected</span>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT LOGIN SECTION */}
      <div className="flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-yellow-50/30 px-6 py-12">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-10">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-xl">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent mb-2">
              EDUFLOW
            </h1>
            <p className="text-sm text-gray-600 font-medium">
              Smart University Management System
            </p>
          </div>

          {/* CLERK SIGN IN - NO ADDITIONAL CONTAINERS */}
          <SignIn
            routing="path"
            path="/student/login"
            signUpUrl="/student/register"
            afterSignInUrl="/student/dashboard"
            appearance={{
              layout: {
                socialButtonsPlacement: "top",
                socialButtonsVariant: "blockButton",
                showOptionalFields: false,
              },
              variables: {
                colorPrimary: "#facc15",
                colorText: "#1f2937",
                colorBackground: "#ffffff",
                colorInputBackground: "#ffffff",
                colorInputText: "#1f2937",
                colorNeutral: "#6b7280",
                borderRadius: "0.75rem",
                fontFamily: "inherit",
                fontSize: "0.875rem",
                spacingUnit: "1rem",
              },
              elements: {
                // Root container - becomes the white card
                rootBox: {
                  width: "100%",
                  maxWidth: "28rem",
                  margin: "0 auto",
                },
                
                // Card becomes the main white container
                cardBox: {
                  width: "100%",
                  backgroundColor: "#ffffff",
                  borderRadius: "1.5rem",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  border: "1px solid #f3f4f6",
                },
                
                card: {
                  width: "100%",
                  padding: "0",
                  boxShadow: "none",
                  backgroundColor: "transparent",
                },
                
                // Header section
                header: {
                  padding: "2rem 2rem 1.5rem 2rem",
                  borderBottom: "1px solid #f3f4f6",
                },
                
                headerTitle: {
                  fontSize: "1.875rem",
                  fontWeight: "700",
                  color: "#1f2937",
                  textAlign: "center",
                  marginBottom: "0.5rem",
                },
                
                headerSubtitle: {
                  fontSize: "0.875rem",
                  color: "#6b7280",
                  textAlign: "center",
                  fontWeight: "400",
                },
                
                // Main content
                main: {
                  padding: "2rem",
                },
                
                // Social buttons
                socialButtons: {
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  marginBottom: "0",
                },
                
                socialButtonsBlockButton: {
                  width: "100%",
                  height: "3rem",
                  border: "2px solid #e5e7eb",
                  borderRadius: "0.75rem",
                  backgroundColor: "#ffffff",
                  color: "#374151",
                  fontWeight: "500",
                  fontSize: "0.875rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  transition: "all 0.2s ease",
                  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                  "&:hover": {
                    borderColor: "#facc15",
                    backgroundColor: "#fffbeb",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  },
                },
                
                socialButtonsBlockButtonText: {
                  fontWeight: "500",
                  fontSize: "0.875rem",
                  color: "#374151",
                },
                
                socialButtonsProviderIcon: {
                  width: "1.25rem",
                  height: "1.25rem",
                },
                
                // Divider
                dividerRow: {
                  margin: "1.5rem 0",
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                },
                
                dividerLine: {
                  flex: "1",
                  height: "1px",
                  backgroundColor: "#e5e7eb",
                },
                
                dividerText: {
                  color: "#9ca3af",
                  fontSize: "0.75rem",
                  fontWeight: "500",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  padding: "0 1rem",
                  flexShrink: "0",
                },
                
                // Form
                form: {
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                },
                
                formFieldRow: {
                  width: "100%",
                  marginBottom: "0",
                },
                
                formFieldLabel: {
                  display: "block",
                  color: "#374151",
                  fontWeight: "500",
                  fontSize: "0.875rem",
                  marginBottom: "0.5rem",
                },
                
                formFieldInput: {
                  width: "100%",
                  height: "3rem",
                  padding: "0 1rem",
                  border: "2px solid #e5e7eb",
                  borderRadius: "0.75rem",
                  backgroundColor: "#ffffff",
                  color: "#1f2937",
                  fontSize: "0.875rem",
                  outline: "none",
                  transition: "all 0.2s ease",
                  "&:focus": {
                    borderColor: "#facc15",
                    boxShadow: "0 0 0 4px rgba(250, 204, 21, 0.1)",
                  },
                  "&::placeholder": {
                    color: "#9ca3af",
                  },
                },
                
                formFieldInputShowPasswordButton: {
                  color: "#6b7280",
                  transition: "color 0.2s ease",
                  "&:hover": {
                    color: "#374151",
                  },
                },
                
                formButtonPrimary: {
                  width: "100%",
                  height: "3rem",
                  marginTop: "1.5rem",
                  background: "linear-gradient(to right, #facc15, #eab308)",
                  color: "#1f2937",
                  fontWeight: "700",
                  fontSize: "0.875rem",
                  borderRadius: "0.75rem",
                  border: "none",
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  transition: "all 0.2s ease",
                  cursor: "pointer",
                  "&:hover": {
                    background: "linear-gradient(to right, #eab308, #ca8a04)",
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    transform: "translateY(-2px)",
                  },
                  "&:active": {
                    transform: "translateY(0)",
                  },
                },
                
                // Footer section
                footer: {
                  padding: "1rem 2rem 2rem 2rem",
                  backgroundColor: "#f9fafb",
                  borderTop: "1px solid #f3f4f6",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.75rem",
                },
                
                footerAction: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "0.25rem",
                  marginBottom: "0.5rem",
                },
                
                footerActionText: {
                  color: "#6b7280",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                },
                
                footerActionLink: {
                  color: "#eab308",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                  "&:hover": {
                    color: "#ca8a04",
                    textDecoration: "underline",
                  },
                },
                
                // Error messages
                formFieldErrorText: {
                  color: "#ef4444",
                  fontSize: "0.75rem",
                  fontWeight: "500",
                  marginTop: "0.25rem",
                },
                
                // Identity preview
                identityPreview: {
                  border: "2px solid #e5e7eb",
                  borderRadius: "0.75rem",
                  padding: "1rem",
                  backgroundColor: "#f9fafb",
                },
                
                identityPreviewText: {
                  color: "#374151",
                  fontWeight: "500",
                  fontSize: "0.875rem",
                },
                
                identityPreviewEditButton: {
                  color: "#eab308",
                  fontWeight: "600",
                  fontSize: "0.875rem",
                  "&:hover": {
                    color: "#ca8a04",
                    textDecoration: "underline",
                  },
                },
                
                // Alternative methods
                alternativeMethodsBlockButton: {
                  border: "2px solid #e5e7eb",
                  borderRadius: "0.75rem",
                  transition: "border-color 0.2s ease",
                  "&:hover": {
                    borderColor: "#facc15",
                  },
                },
                
                // Loading states
                spinner: {
                  color: "#facc15",
                },
                
                // Additional footer content
                footerPages: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.5rem",
                  width: "100%",
                },
              },
            }}
          />

          {/* Copyright Footer - Outside Clerk */}
          <p className="text-center text-xs text-gray-400 mt-8 font-medium">
            © {new Date().getFullYear()} EDUFLOW. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;