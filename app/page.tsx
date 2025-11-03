export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
            <img
              src="profile-picture.jpg"
              className="relative w-40 h-40 rounded-full mx-auto border-4 border-white shadow-2xl object-cover"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            Fery Jun Darmasaputra
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light">Web Developer</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-4"></span>
              Tentang Saya
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Saya adalah seorang web developer yang passionate dengan teknologi. Saya telah mempelajari dalam membangun aplikasi web menggunakan berbagai framework seperti React, Next.js, dan Node.js. Saya senang belajar bebragai hal baru dan tantangan baru dalam dunia per-codingan dan Saya selalu berusaha untuk meningkatkan kemampuan saya.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-2 h-8 bg-gradient-to-b from-green-500 to-blue-500 rounded-full mr-4"></span>
              Keahlian
            </h2>
            <div className="flex flex-wrap gap-3">
              {[
                { name: 'JavaScript', color: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200' },
                { name: 'React', color: 'bg-blue-100 text-blue-800 hover:bg-blue-200' },
                { name: 'Next.js', color: 'bg-gray-100 text-gray-800 hover:bg-gray-200' },
                { name: 'Node.js', color: 'bg-green-100 text-green-800 hover:bg-green-200' },
                { name: 'Tailwind CSS', color: 'bg-teal-100 text-teal-800 hover:bg-teal-200' },
                { name: 'TypeScript', color: 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200' }
              ].map((skill, index) => (
                <span
                  key={skill.name}
                  className={`${skill.color} px-4 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-md`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mr-4"></span>
            Kontak
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-2">📧</div>
              <p className="font-semibold text-gray-800">Email</p>
              <p className="text-gray-600">fery.535240155@stu.untar.ac.id</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-2">📱</div>
              <p className="font-semibold text-gray-800">Telepon</p>
              <p className="text-gray-600">+62 xxx-xxxx-xxxx</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-2">🐙</div>
              <p className="font-semibold text-gray-800">GitHub</p>
              <p className="text-gray-600">github.com/JunZV2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
