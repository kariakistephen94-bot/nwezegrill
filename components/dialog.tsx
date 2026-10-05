'use client';
import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
export function Dialog({children,onClose,title,drawer=false}:{children:React.ReactNode;onClose:()=>void;title:string;drawer?:boolean}) {
 const ref=useRef<HTMLDivElement>(null);
 useEffect(()=>{const previous=document.activeElement as HTMLElement; const old=document.body.style.overflow; document.body.style.overflow='hidden'; ref.current?.focus(); const listener=(e:KeyboardEvent)=>{if(e.key==='Escape')onClose();if(e.key==='Tab'){const nodes=ref.current?.querySelectorAll<HTMLElement>('button,a,input,textarea,select,[tabindex="0"]');if(!nodes?.length)return;const first=nodes[0],last=nodes[nodes.length-1];if(e.shiftKey&&(document.activeElement===first||document.activeElement===ref.current)){e.preventDefault();last.focus()}else if(!e.shiftKey&&(document.activeElement===last||document.activeElement===ref.current)){e.preventDefault();first.focus()}}};document.addEventListener('keydown',listener);return()=>{document.body.style.overflow=old;document.removeEventListener('keydown',listener);previous?.focus()}},[onClose]);
 return <div className={`modal-backdrop ${drawer?'drawer-backdrop':''}`} onMouseDown={e=>{if(e.target===e.currentTarget)onClose()}}><div className={`dialog ${drawer?'drawer':''}`} role="dialog" aria-modal="true" aria-label={title} tabIndex={-1} ref={ref}><button className="icon-button dialog-close" aria-label="Close dialog" onClick={onClose}><X size={21}/></button>{children}</div></div>
}
