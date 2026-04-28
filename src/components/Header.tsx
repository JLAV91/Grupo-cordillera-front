import { Calendar, ChevronDown, MapPin, UserCircle } from 'lucide-react';

export function Header() {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0">
      <div className="flex items-center gap-6">
        {/* Branch Selector */}
        <div className="flex items-center gap-2 cursor-pointer hover:bg-slate-50 p-2 rounded-md transition-colors">
          <div className="w-8 h-8 bg-brand-50 rounded flex items-center justify-center text-brand-600">
            <MapPin size={18} />
          </div>
          <div>
            <div className="text-xs text-slate-500 font-medium leading-none mb-1">Sucursal</div>
            <div className="text-sm font-semibold text-slate-800 flex items-center gap-1 leading-none">
              Todas las sucursales <ChevronDown size={14} className="text-slate-400" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Date Selector */}
        <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-600 cursor-pointer hover:bg-slate-100 transition-colors">
          <Calendar size={16} className="text-slate-400" />
          <span>Abril 2026</span>
          <ChevronDown size={14} className="text-slate-400 ml-1" />
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3 pl-4 border-l border-slate-200 cursor-pointer">
          <div className="text-right hidden sm:block">
            <div className="text-sm font-semibold text-slate-800 leading-none mb-1">Admin User</div>
            <div className="text-xs text-slate-500 leading-none">Gerencia Comercial</div>
          </div>
          <UserCircle size={32} className="text-slate-400" />
        </div>
      </div>
    </header>
  );
}
