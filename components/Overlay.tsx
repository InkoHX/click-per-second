interface OverlayProps {
  display: boolean
}

export const Overlay: React.FC<OverlayProps> = ({
  display,
  children
}) => (
    <div id='overlay'>
      {children}
      <style jsx>{`
      #overlay {
        display: ${display ? 'block' : 'none'};
        left: 0;
        top: 0;
        position: fixed;
        height: 100%;
        width: 100%;
        background-color: rgba(100, 100, 100, .5);
        z-index: 5;
      }
    `}</style>
    </div>
  )
