import { UserController } from "./controller/UserController"
import { ThemeController } from "./controller/ThemeController"
import { AuthHandler } from "./auth/AuthHandler"

export const Routes = [{
    method: "get",
    route: "/api/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/api/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "put",
    route: "/api/users",
    controller: UserController,
    action: "save"
}, {
    method: "post",
    route: "/api/users",
    controller: UserController,
    action: "modify"
}, {
    method: "delete",
    route: "/api/users/:id",
    controller: UserController,
    action: "remove"
}, {
    method: "get",
    route: "/themes/:id",
    controller: ThemeController,
    action: "one"
}, {
    method: "post",
    route: "/themes/",
    controller: ThemeController,
    action: "save"
}, {
    method: "delete",
    route: "/themes/:id",
    controller: ThemeController,
    action: "remove"
}, {
    method: "post",
    route: "/login",
    controller: AuthHandler,
    action: "generateAuth"
}, {
    method: "get",
    route: "/login/clear",
    controller: AuthHandler,
    action: "clearAuth"
}, {
    method: "get",
    route: "/validate",
    controller: AuthHandler,
    action: "validateAuth"
}, {
    method: "post",
    route: "/signup",
    controller: UserController,
    action: "save"
}]
