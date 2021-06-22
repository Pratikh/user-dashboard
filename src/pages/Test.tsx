import "./TestStyles.scss";

var data: number[] = [];

for (let i = 0; i < 1000; i++) {
  data.push(i);
}
export default function Test() {
  return (
    <div>
      <header>
        <h4>My header</h4>
      </header>
      <main className="main">
        <div className="sidePanel">
          <div className="panel">Side panel</div>
        </div>
        <div className='tileMainParent'>
          <div className="tilesParent">
            {data.map((a) => {
              return (
                <div key={a} className="tiles">
                  {a}
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
