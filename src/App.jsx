import { useState } from 'react';
import { useLanguage } from 'react-intl-lil';
import './App.css';

function App() {
  const { gs, ga } = useLanguage();
  return (
    <div className='flex justify-center w-full text-start'>
      <div className='flex flex-col gap-6 w-full max-w-3xl p-5 items-start'>
        <div>{gs('home.subtitle')}</div>

        <section className='flex flex-col gap-3 w-full'>
          <h3 className='text-end'>
            {gs('home.developer')}
            <a href={'https://intorandom.com'} className='underline'>
              intoRandom
            </a>
          </h3>
        </section>
        <hr className='w-full' />

        <section className='flex flex-col gap-2'>
          <h3 className='text-lg'>{gs('home.sum.title')}</h3>
          <div>
            {gs('home.sum.data')}
            <a
              href={'https://github.com/intoRandom/react-intl-lil-react'}
              className='underline'
            >
              {gs('home.sum.repository')}
            </a>
          </div>
        </section>

        <section className='flex flex-col gap-2'>
          <h3 className='text-lg'>{gs('home.inst.title')}</h3>
          <div>{gs('home.inst.data')}</div>
          <pre className='border-2 p-3'>npm install react-intl-lil</pre>
        </section>

        <section className='flex flex-col gap-2 text-wrap max-w-full'>
          <h3 className='text-lg'>{gs('home.config.title')}</h3>
          <div>{gs('home.config.data')}</div>
          <img alt='files' src='./capture.png' width={210} height={144} />
          <ul className='flex flex-col gap-2'>
            {ga('home.config.files').map((file, index) => (
              <li key={index} className='flex flex-col gap-2'>
                <div>{file.data}</div>
                <pre className='border-2 p-3 overflow-auto'>{file.file}</pre>
              </li>
            ))}
          </ul>
        </section>

        <section className='flex flex-col gap-2 py-10'>
          <div>{gs('home.final')}</div>
          <a href={'https://buymeacoffee.com/intorandom'} className='underline'>
            Buy me a coffee
          </a>
        </section>
      </div>
    </div>
  );
}

export default App;
