"use client";

import Image from 'next/image';
import avatarPng from '../assets/avatar.png';
import { UserCircle, CaretRight, Key, Bell, PersonArmsSpread, Devices, UserSwitch, Question, SignOut } from '@phosphor-icons/react';

export default function UserSettings() {
  return (
    <div className='flex flex-col gap-6 w-96 h-auto bg-gray-500 p-6 pb-4 rounded-xl shadow-2xl'>

      <div className='flex gap-4 items-center justify-center'>
        <Image src={avatarPng} width={48} height={48} alt='Avatar' />

        <div className='flex-grow'>
          <h1 className='text-gray-100 font-bold text-lg leading-6'>Marvin McKinney</h1>
          <p className='text-gray-200 text-sm leading-5'>marvin.mckinney@example.com</p>
        </div>
      </div>
      
      <div>
        <div className='h-[1px] bg-gray-400 mb-4'></div>
        <div className='flex flex-col gap-3 hover:cursor-pointer'>
          <h2 className='text-xs text-gray-300'>CONTA</h2>

          <div className='flex items-center gap-2'>
            <UserCircle width={20} height={20} className='text-gray-100' />
            <h1 className='flex-grow text-gray-100 text-base leading-5'>Dados pessoais</h1>
            <CaretRight width={16} height={16} className='text-gray-300' />
          </div>
          
          <div className='flex items-center gap-2'>
            <Key width={20} height={20} className='text-gray-100' />
            <h1 className='flex-grow text-gray-100 text-base leading-5'>Informações de login</h1>
            <CaretRight width={16} height={16} className='text-gray-300' />
          </div>
        </div>
      </div>

      <div>
        <div className='h-[1px] bg-gray-400 mb-4'></div>
        <div className='flex flex-col gap-3 hover:cursor-pointer'>
          <h2 className='text-xs text-gray-300'>PREFERÊNCIAS</h2>

          <div className='flex items-center gap-2'>
            <Bell width={20} height={20} className='text-gray-100' />
            <h1 className='flex-grow text-gray-100 text-base leading-5'>Notificações</h1>
            <CaretRight width={16} height={16} className='text-gray-100' />
          </div>
          
          <div className='flex items-center gap-2'>
            <PersonArmsSpread width={20} height={20} className='text-gray-100' />
            <h1 className='flex-grow text-gray-100 text-base leading-5'>Acessibilidade</h1>
            <CaretRight width={16} height={16} className='text-gray-300' />
          </div>
        </div>
      </div>

      <div>
        <div className='h-[1px] bg-gray-400 mb-4'></div>
        <div className='flex flex-col gap-3 hover:cursor-pointer'>
          <h2 className='text-xs text-gray-300'>PRIVACIDADE</h2>

          <div className='flex items-center gap-2'>
            <Devices width={20} height={20} className='text-gray-100' />
            <h1 className='flex-grow text-gray-100 text-base leading-5'>Aparelhos conectados</h1>
            <CaretRight width={16} height={16} className='text-gray-300' />
          </div>
          
          <div className='flex items-center gap-2'>
            <UserSwitch width={20} height={20} className='text-gray-100' />
            <h1 className='flex-grow text-gray-100 text-base leading-5'>Contas vinculadas</h1>
            <CaretRight width={16} height={16} className='text-gray-300' />
          </div>
        </div>
      </div>

      <div>
        <div className='h-[1px] bg-gray-400 mb-4'></div>
        <div className='flex flex-col gap-3 hover:cursor-pointer'>
          <div className='flex items-center gap-2'>
            <Question width={20} height={20} className='text-gray-100' />
            <h1 className='flex-grow text-gray-100 text-base leading-5'>Central de ajuda</h1>
          </div>
          
          <div className='flex items-center gap-2 text-red'>
            <SignOut width={20} height={20}/>
            <h1 className='flex-grow text-base leading-5'>Sair</h1>
          </div>
        </div>
      </div>
    </div>
  )
}