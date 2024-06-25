import Shimmer from "./Shimmer";
import UseFetchStore from "./UseFetchStore";

const Body = () => {
    const { store } = UseFetchStore();

    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                padding: "20px",
            }}
        >
            {!store
                ? [...Array(8)].map((_, index) => <Shimmer key={index} />)
                : store.map((item) => (
                      <div
                          key={item.id}
                          style={{
                              border: "1px solid #ccc",
                              borderRadius: "8px",
                              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                              margin: "10px",
                              padding: "16px",
                              width: "250px",
                              height: "350px",
                              textAlign: "center",
                              backgroundColor: "#fff",
                          }}
                      >
                          <h1
                              style={{
                                  fontSize: "18px",
                                  margin: "10px 0",
                                  color: "#333",
                              }}
                          >
                              {item.title}
                          </h1>
                          <img
                              src={item.image}
                              alt={item.title}
                              style={{
                                  width: "150px",
                                  height: "150px",
                                  borderRadius: "8px",
                              }}
                          />
                          <p
                              style={{
                                  fontSize: "16px",
                                  fontWeight: "bold",
                                  color: "#333",
                              }}
                          >
                              ${item.price}
                          </p>
                          <p style={{ fontSize: "14px", color: "#777" }}>
                              {item.category}
                          </p>
                          <p style={{ fontSize: "14px", color: "#333" }}>
                              Rating: {item.rating.rate}
                          </p>
                      </div>
                  ))}
        </div>
    );
};

export default Body;
