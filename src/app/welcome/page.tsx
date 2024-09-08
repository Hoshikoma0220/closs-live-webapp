'use client';

import { useState } from 'react';

const AccountPage = () => {
  const [authMode, setAuthMode] = useState<'login' | 'register' | null>(null);
  const [contestLoginVisible, setContestLoginVisible] = useState(false); // コンテストログイン用フォームの表示管理
  const [id, setId] = useState(''); // コンテスト用アカウントのID
  const [password, setPassword] = useState(''); // コンテスト用アカウントのパスワード
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    // コンテスト専用アカウントのIDとパスワードのチェック (例: "contest_user", "password123")
    if (id === 'contest_user' && password === 'password123') {
      // ログイン成功、適切なページへリダイレクト (ここでは仮にコンソール出力)
      console.log('ログイン成功');
    } else {
      setErrorMessage('IDまたはパスワードが正しくありません。');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
      <div className={`bg-white p-10 rounded-lg shadow-2xl w-full max-w-lg text-gray-900 transition-all duration-700 ease-in-out ${authMode ? 'h-auto' : 'h-64'}`}>
        <h1 className="text-4xl font-bold text-center mb-6">ようこそ ClossLive へ</h1>
        <p className="text-center mb-8 text-gray-600">ClossLiveの利用にはFanLaboアカウントが必要です。</p>

        {!authMode && (
          <div className="flex space-x-4 justify-center mb-8">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105" onClick={() => setAuthMode('login')}>
              ログイン
            </button>
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-transform transform hover:scale-105" onClick={() => setAuthMode('register')}>
              新規登録
            </button>
          </div>
        )}

        {authMode === 'login' && (
          <div>
            <h2 className="text-xl font-bold text-center mb-4">ログイン</h2>
            <p className="text-center mb-6">
              ログインにはFanLaboアカウントが必要です。FanLaboの認証システムでログイン後、自動的にリダイレクトされます。
            </p>

            <button
              onClick={() => window.location.href = 'https://fanlabo-login-url.com'} // 実際のFanLaboログインURLに変更
              className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-opacity-90 transition mb-4"
            >
              FanLaboアカウントでログイン
            </button>

            {/* コンテストログイン表示切り替え */}
            {!contestLoginVisible ? (
              <button
                onClick={() => setContestLoginVisible(true)}
                className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-opacity-90 transition"
              >
                コンテストログイン
              </button>
            ) : (
              <div className="mt-4">
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="コンテストID"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    className="w-full p-3 text-gray-900 rounded border border-gray-300 mb-2"
                  />
                  <input
                    type="password"
                    placeholder="パスワード"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 text-gray-900 rounded border border-gray-300"
                  />
                  {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
                </div>

                <button
                  onClick={handleLogin}
                  className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-opacity-90 transition"
                >
                  ログイン
                </button>
              </div>
            )}
          </div>
        )}

        {authMode === 'register' && (
          <div>
            <h2 className="text-xl font-bold text-center mb-4">新規登録</h2>
            <p className="text-center mb-6">
              利用にはFanLaboアカウントが必要です。作成するには下のボタンを押してFanLaboの登録ページに進んでください。
            </p>
            <p className="text-center mb-6">
              すでにFanLaboアカウントをお持ちの場合は、<button onClick={() => setAuthMode('login')} className="text-blue-500 underline">ログイン</button>してください。
            </p>

            <button
              onClick={() => window.location.href = 'https://fanlabo-account-registration-url.com'} // 実際のFanLaboの新規登録URLに変更
              className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-opacity-90 transition"
            >
              FanLaboアカウントを作成
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountPage;