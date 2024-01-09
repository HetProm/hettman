import '@/styles/navbar.css'

type CircleiconMenuProps = {
    className?: string
    delay: number
}


const CircleiconMenu: React.FC<CircleiconMenuProps> = ({className , delay = 1}) => {
    return (
      <div className={className}>
        <svg xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 61 61" className='h-auto w-[3em] md:w-[2em]'>
            <g id="Ellipse_3" data-name="Ellipse 3" fill="none" stroke="#341948" strokeWidth="9">
                <circle cx="30.5" cy="30.5" r="30.5" stroke="none"/>
                <circle cx="30.5" cy="30.5" r="26" fill="none" className='animatedStroke' style={{ animationDelay: `${delay}s` }}/>
            </g>
        </svg>

      </div>
    );
  };

export default  CircleiconMenu