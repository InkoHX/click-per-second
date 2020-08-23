export const OverlayContainer: React.FC = ({
  children
}) => (
    <div id='overlayContainer'>
      {children}
      <style jsx>{`
      #overlayContainer {
        position: fixed;
        background-color: #fff;
        width: 50vw;
        height: 50vh;
        padding: 0.75rem;
        margin: auto;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
    `}</style>
    </div>
  )
