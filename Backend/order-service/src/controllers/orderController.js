const orders = new Map();

export const createOrder = (req, res, next) => {
  try {
    const { items, address, paymentMethod, subtotal, deliveryCharge, total } = req.body;
    
    if (!items || items.length === 0) {
      return res.status(400).json({ success: false, message: 'Order must contain items' });
    }

    const newOrder = {
      orderId: `ord_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
      userId: req.user.userId,
      items,
      status: 'pending',
      subtotal,
      discount: 0,
      deliveryCharge,
      total,
      address,
      paymentMethod,
      paymentStatus: paymentMethod === 'online' ? 'paid' : 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    orders.set(newOrder.orderId, newOrder);
    res.status(201).json({ success: true, data: newOrder });
  } catch (error) {
    next(error);
  }
};

export const getUserOrders = (req, res, next) => {
  try {
    const userOrders = Array.from(orders.values()).filter(o => o.userId === req.user.userId);
    userOrders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    res.json({ success: true, data: userOrders });
  } catch (error) {
    next(error);
  }
};

export const getOrderById = (req, res, next) => {
  try {
    const order = orders.get(req.params.orderId);
    if (!order) return res.status(404).json({ success: false, message: 'Order not found' });
    if (order.userId !== req.user.userId && req.user.role !== 'admin') {
      return res.status(403).json({ success: false, message: 'Forbidden' });
    }
    res.json({ success: true, data: order });
  } catch (error) {
    next(error);
  }
};

export const updateOrderStatus = (req, res, next) => {
  try {
    const { status } = req.body;
    const order = orders.get(req.params.orderId);
    if (!order) return res.status(404).json({ success: false, message: 'Order not found' });
    
    order.status = status;
    order.updatedAt = new Date().toISOString();
    orders.set(order.orderId, order);
    res.json({ success: true, data: order });
  } catch (error) {
    next(error);
  }
};

export const cancelOrder = (req, res, next) => {
  try {
    const order = orders.get(req.params.orderId);
    if (!order) return res.status(404).json({ success: false, message: 'Order not found' });
    if (order.userId !== req.user.userId) return res.status(403).json({ success: false, message: 'Forbidden' });
    if (order.status !== 'pending') return res.status(400).json({ success: false, message: 'Only pending orders can be cancelled' });
    
    order.status = 'cancelled';
    order.updatedAt = new Date().toISOString();
    orders.set(order.orderId, order);
    res.json({ success: true, data: order });
  } catch (error) {
    next(error);
  }
};
